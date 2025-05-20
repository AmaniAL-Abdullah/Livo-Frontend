import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


function Layout() {
    return (
        <div
            className="relative flex flex-col min-h-screen bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("/Logo/About.svg")' }}
        >

            <Navbar />
            <main className="flex-grow p-4 bg-transparent">
                <Outlet />
            </main>
            <Footer />
        </div>

    )

}

export default Layout