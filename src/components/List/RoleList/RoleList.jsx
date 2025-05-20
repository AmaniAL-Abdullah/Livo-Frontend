import React, { useEffect, useState } from 'react'
import { authorizedRequest } from '../../../lib/api'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

import Greeting from '../../Greeting/Greeting'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react'

function RoleList() {
    const [roles, setRoles] = useState([])

    async function getAllRoles() {
        try {
            const response = await authorizedRequest('get', '/roles/')
            setRoles(response.data)
        } catch (err) {
            console.error('Error fetching roles:', err)
        }
    }

    useEffect(() => {
        getAllRoles()
    }, [])

    return (
        <section className="container mx-auto py-10 px-4">
            
            <Greeting />
            <div className="flex items-center justify-between mb-6">
                <Typography variant="h4" className="text-[#444444] font-bold">
                    Roles Overview
                </Typography>

                <Link to="/roles/add">
                    <Button
                        size="sm"
                        className="flex items-center gap-2 rounded-[100px] bg-[#f48362] hover:bg-[#3a49d9]"
                    >
                        <Plus className="w-4 h-4" />
                        Add Role
                    </Button>
                </Link>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {roles.map((role) => (
                    <Card
                        key={role.id}
                        className="p-6 rounded-2xl shadow-lg border border-blue-100 bg-white/85 hover:shadow-xl transition duration-300"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            className="flex items-center justify-center bg-[#6f6fff]/10 w-16 h-16 rounded-full mx-auto mb-4"
                        >
                            <span className="text-2xl font-bold text-[#6f6fff]">
                                {role.name[0].toUpperCase()}
                            </span>
                        </CardHeader>

                        <CardBody className="text-center space-y-2">
                            <Typography
                                variant="h5"
                                className="text-[#6f6fff] capitalize"
                            >
                                {role.name}
                            </Typography>

                            <Typography className="text-gray-600">
                                Description: {role.description}
                            </Typography>

                            <Link to={`/roles/${role.id}`}>
                                <Button
                                    size="sm"
                                    className="mt-4 bg-[#6f6fff] hover:bg-[#f48362] text-white rounded-full"
                                >
                                    View Details
                                </Button>
                            </Link>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default RoleList