import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from '../../../lib/api'

function RoleList() {
    const [roles, setRoles] = useState([])

        async function getAllRoles() {
            try{
                const response = await authorizedRequest('get', '/roles/')
            setRoles(response.data)
            }
        catch (err) {
            console.error('Error fetching posts:', err)
        }
    }
        useEffect(() =>{
            getAllRoles()
        }, [])
        


        return (
            <div>
                <h2> All Role:</h2>
                <ul>
                    {roles.map(role => {
                        return (
                            <li key={role.id}>
                                <Link to={`/roles/${role.id}`}>{role.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    export default RoleList
