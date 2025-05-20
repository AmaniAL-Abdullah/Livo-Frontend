import React, { useState } from 'react'
import { useNavigate } from 'react-router'
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
        <div className="min-h-screen flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                    <div>
                        <Link
                            to="/roles"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <Typography variant="h4" className="mb-6">
                        Role Add
                    </Typography>

                    <RoleForm
                        name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription}
                        handleSubmit={handleSubmit}
                        titleVerb="Add"
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default AddRole
