import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-5">
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
    )
}