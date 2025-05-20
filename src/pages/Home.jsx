import React from 'react'
import { useNavigate } from 'react-router'
import { Typography, Button } from '@material-tailwind/react'
import Navbar from "../components/Navbar/Navbar"

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div
                className="relative min-h-screen flex items-center justify-start bg-no-repeat bg-cover"
                style={{
                    backgroundImage: 'url("/Logo/Cover.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-6 lg:pl-20 py-20 rounded-lg">
                    <h1 className="text-6xl lg:text-9xl font-extrabold bg-gradient-to-r from-[#fddce2] to-[#606ee1] text-transparent bg-clip-text mb-3">
                        Livo
                    </h1>
                    <p className="text-xl lg:text-2xl bg-gradient-to-r from-[#fddce2] to-[#606ee1] text-transparent bg-clip-text mb-5 font-semibold">
                        Where roles flow, tasks grow<br />
                        and success shows
                    </p>
                    <Typography
                        variant="lead"
                        className="text-[#fddce2] text-base lg:text-lg mb-5 leading-relaxed"
                    >
                        Simplify your workflow and achieve more.<br />

                    </Typography>
                    <Button
                        size="lg"
                        className="bg-[#f48362] hover:bg-[#3a49d9] text-white rounded-[100px] px-8 py-3 shadow-lg transition duration-300"
                        onClick={() => navigate('/login')}
                    >
                        START NOW!
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home
