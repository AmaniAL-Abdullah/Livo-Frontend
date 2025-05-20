import { Link, useNavigate, useLocation } from "react-router-dom"
import { Home, LogOut, AlignJustify } from "lucide-react"

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const accessToken = localStorage.getItem("access_token")

    function handleLogout() {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("username")
        navigate("/login")
    }

    return (
        <nav className="sticky top-0 z-50 bg-[#ffff]/50 backdrop-blur-md shadow-md text-[#1a1a1a] hover:text-[#ef9131] shadow-md" >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/Logo/livo.png" alt="Livo Logo" className="h-10 w-auto" />
                    <span className="text-[#001643] text-xl font-bold">Livo</span>
                </Link>

                <div className="flex items-center gap-6">
                    {accessToken && location.pathname !== "/" ? (
                        <>
                            <Link
                                to="/roles"
                                className="inline-flex items-center gap-2 text-[#001643] hover:text-[#ef9131] transition-colors"
                            >
                                <Home className="w-5 h-5" />
                                <span>Home</span>
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center gap-2 text-[#001643] hover:text-[#ef9131] transition-colors"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-[#001643] hover:text-[#ef9131] transition-colors">
                                Login
                            </Link>
                            <AlignJustify />
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
