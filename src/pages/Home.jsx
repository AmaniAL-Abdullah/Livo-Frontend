import React from 'react'
import { useNavigate } from 'react-router'
import bgImage from "../assets/Logo/lov.png"
import {
    Typography,
    Button,
} from '@material-tailwind/react'

function Home() {
    const navigate = useNavigate()
    return (
        <div
            className="min-h-screen flex items-center justify-end bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
            }}
        >
            <div className=" w-1/2 h-full flex flex-col justify-center items-start pl-40 py-20">
                <h1 className="bg-gradient-to-r from-[#141424] via-[#565893] to-[#ef9131] bg-clip-text text-9xl font-extrabold text-transparent mb-4">
                    Livo
                </h1>
                <p className="bg-gradient-to-r from-[#141424] via-[#565893] to-[#ef9131] bg-clip-text text-xl font-semibold text-transparent mb-6">
                    Where roles flow, tasks grow, and success shows
                </p>
                <Typography
                    variant="lead"
                    className="text-[#545454] text-lg mb-8 leading-relaxed"
                >
                    Empower your workflow. Organize roles, assign tasks, and celebrate achievements — all in one place.
                </Typography>
                <Button
                    size="lg"
                    className="bg-[#ef9131] hover:bg-[#141424] text-white rounded-[12px] px-8 py-3 shadow-lg transition duration-300"
                    onClick={() => navigate('/login')}
                >
                    START NOW!
                </Button>
            </div>
        </div>
    )

}
export default Home