import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function RoleList() {
    const [roles, setRoles] = useState([])

        async function getAllRoles() {
            const response = await axios.get('http://127.0.0.1:8000/api/roles/')
            console.log(response)
            setRoles(response.data)
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
                                <p>{role.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    export default RoleList
