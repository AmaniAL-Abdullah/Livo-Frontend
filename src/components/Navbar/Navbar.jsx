import { Link } from "react-router-dom"
import { Home, LogOut } from 'lucide-react'
import logo from '../../assets/Logo/livo.png'

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Livo Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold text-gray-700">Livo</span>
            </Link>

            <div className="flex items-center space-x-6">
                <Link
                    to="/roles"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                </Link>

                <Link
                    to="/logout"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar