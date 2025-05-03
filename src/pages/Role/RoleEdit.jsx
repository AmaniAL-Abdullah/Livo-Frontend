import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import RoleForm from '../../components/Form/RoleForm/RoleForm'
import { authorizedRequest } from '../../lib/api'

function RoleEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    async function getCurrentRoleData() {
        const response = await authorizedRequest('get', `/roles/${id}/`)
        setName(response.data.name)
        setDescription(response.data.description)
    }

    useEffect(() => {
        getCurrentRoleData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `/roles/${id}/`, { name, description})
        navigate(`/roles/${id}`)

    }

    return (
        <div>
            <h2>Edite Role page </h2>
            <RoleForm
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                handleSubmit={handleSubmit}
                titleVerb = 'Edit'
            />
        </div>
    )
}
export default RoleEdit
