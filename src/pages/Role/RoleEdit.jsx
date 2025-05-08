import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import RoleForm from '../../components/Form/RoleForm/RoleForm'
import { authorizedRequest } from '../../lib/api'
import { ChevronLeft } from "lucide-react"
import { Link } from 'react-router-dom'

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

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
        const response = await authorizedRequest('patch', `/roles/${id}/`, { name, description })
        navigate(`/roles/${id}`)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                <div className="pb-6">
                        <Link
                            to={`/roles/${id}`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <Typography variant="h4" className="mb-6">
                        Edit Role Page
                    </Typography>

                    <RoleForm
                        name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription}
                        handleSubmit={handleSubmit}
                        titleVerb="Edit"
                    />

                </CardBody>
            </Card>
        </div>
    )
}

export default RoleEdit
