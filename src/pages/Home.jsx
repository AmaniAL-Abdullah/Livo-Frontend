import React from 'react'
import { useNavigate } from 'react-router'
import RoleList from '../components/RoleList/RoleList'

function Home() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        navigate('/signup') 
    }
    return (
        <>
            <h1> Welcome to the Role App</h1>
            <RoleList />
        </>
    )
}

export default Home