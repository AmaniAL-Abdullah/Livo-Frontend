import React from 'react'
import { useNavigate } from 'react-router'
import RoleList from '../components/List/RoleList/RoleList'

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
            <button onClick={handleLogout}> Logout </button>
            <RoleList />
        </>
    )
}

export default Home