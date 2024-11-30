import { API } from "@/utils/api"


const AuthService = {
    async login(payload) {
        const { data: { data } } = await API.post('/auth/login', payload)
        return data
    },
    getSession() {
        const session = localStorage.getItem('authSession')
        if(!session) {
            return null
        }
        return JSON.parse(session)
    },
    setSession(data) {
        localStorage.setItem('authSession', JSON.stringify(data))
    },
    logOut() {
        localStorage.removeItem('authSession')
        window.location.href = '/auth/login'
    }
}

export {
    AuthService
}