import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate()
    let handleToDashboard = () => {
        navigate('/dashboard')
    }
    return (
        <div className="flex items-center justify-center">
            <form className="bg-slate-700 flex flex-col px-5 py-10 rounded-lg items-center justify-center gap-4 text-white">
                <h1 className="text-2xl text-white font-bold">Login</h1>
                <div className="flex flex-col gap-2 items-start">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" id="username" className="bg-slate-600 border-2 border-white rounded px-5 py-3" />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" id="password"  className="bg-slate-600 border-2 border-white rounded px-5 py-3"/>
                </div>
                <button className="bg-white text-black rounded px-5 py-3 w-full" onClick={handleToDashboard}>Submit</button>
            </form>
        </div>
    )
}