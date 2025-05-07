import React from 'react'
import { useNavigate } from 'react-router'
import RoleList from '../components/List/RoleList/RoleList'

import {
    Typography,
    Button,
    Card,
    CardBody
} from '@material-tailwind/react'

function Home() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/signup')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">

                    <Typography variant="h3" className="text-center text-gray-900">
                        Welcome to the Role App
                    </Typography>

                    <Button onClick={handleLogout} color="red" variant="outlined">
                        Logout
                    </Button>


            <div className="w-full max-w-5xl">
                <RoleList />
            </div>
        </div>
    )
}

export default Home
