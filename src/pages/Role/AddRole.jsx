import React from 'react'
import RoleForm from '../../components/Form/RoleForm/RoleForm'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'

function AddRole() {
    const navigate = useNavigate()
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
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default AddRole
