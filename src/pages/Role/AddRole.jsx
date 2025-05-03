import React from 'react'
import RoleForm from '../../components/Form/RoleForm/RoleForm'
import { useState } from 'react'
import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

function AddRole() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const response = await authorizedRequest('post', '/roles/', { name, description })
        setName('')
        setDescription('')
    }

    return (
        <div>
            <h2> Role Add</h2>
            <RoleForm
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription} 
                handleSubmit={handleSubmit}
                titleVerb='Add'
                />
        </div>
    )
}

export default AddRole
