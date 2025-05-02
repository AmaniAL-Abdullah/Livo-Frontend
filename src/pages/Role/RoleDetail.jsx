import React from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../../lib/api'

function RoleDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [role, setRole] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

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


    async function deleteRole() {
            try {
                const response = await authorizedRequest('delete', `/roles/${id}/`)
                if (response.status === 204) {
                    navigate('/')
                }
            } catch (err) {
                console.log(' Role deletion failed:', err)
            }
        }

    function showConfirmDelete() {
            setDeleteConfirm(true)
        }


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!role) return <h1>Loading your Role...</h1>

    return (
        <div>
            <h2>{role.name}</h2>
            <p>{role.description}</p>
            {
                deleteConfirm
                    ?
                    <button onClick={deleteRole}>Are you Sure?</button>
                    :
                    <button onClick={showConfirmDelete}>Delete</button>
            }
            <Link to={`/roles/${id}/edit`}>Edit This Role</Link>
        </div>
    )
}

export default RoleDetail
