import React from 'react'
import axios from 'axios'

function RoleList() {

        async function getAllRole() {
            const response = await axios.get('http://127.0.0.1:8000/api/role/')
            console.log(response)
        }
        getAllRole()
        return (
            <div>
                <h2> All Role:</h2>
            </div>
        )
    }

    export default RoleList
