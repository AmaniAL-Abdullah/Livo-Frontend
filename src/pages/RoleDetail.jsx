import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../lib/api'

function RoleDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [role, setRole] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    async function getSingleRole() {
        try {
            const response = await authorizedRequest('get', `/roles/${id}`)
            setRole(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }

    useEffect(() => {
        getSingleRole()
        console.log(id)
    }, [])


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!role) return <h1>Loading your Post...</h1>

    return (
        <div>
            <h2>{role.name}</h2>
            <p>{role.description}</p>
        </div>
    )
}

export default RoleDetail
