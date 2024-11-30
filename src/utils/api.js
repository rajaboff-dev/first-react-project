import { AuthService } from "@/services/AuthService";
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

API.interceptors.request.use((config) => {
    const session = AuthService.getSession();
    const token = session?.access_token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    response => response,
    async (err) => {
        const originalReq = err.config;
        if (err.response?.status === 401 && !originalReq._retry) {
            originalReq._retry = true;
            try {
                const refreshToken = AuthService.getSession()?.refresh_token;
                
                if (!refreshToken) {
                    AuthService.logOut();
                    return Promise.reject(err);
                }
                const {data: { data: userData }} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, { 
                    refresh_token: refreshToken 
                });
                AuthService.setSession(userData);
                originalReq.headers.Authorization = `Bearer ${userData.access_token}`;
                return axios(originalReq);
            } catch (err) {
                AuthService.logOut();
                return Promise.reject(err);
            }
        }

        return Promise.reject(err);
    }
);

export { API };