import React, { useEffect, useState } from 'react'
import { authorizedRequest } from '../../../lib/api'
import { Link } from 'react-router-dom'
import { Plus, ArrowRight } from 'lucide-react'

import {
    Card,
    CardBody,
    Typography,
    Button,
    List,
    ListItem,
    ListItemPrefix
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
        <Card className="mt-6 shadow-md border border-gray-200">
            <CardBody>
                <div className="flex items-center justify-between mb-4">
                    <Typography variant="h5" color="blue-gray">
                        All Roles
                    </Typography>
                    <Link to="/roles/add">
                        <Button size="sm" color="blue" className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add Role
                        </Button>
                    </Link>
                </div>

                <List>
                    {roles.map((role) => (
                        <Link to={`/roles/${role.id}`} key={role.id}>
                            <ListItem className="hover:bg-blue-50">
                                <ListItemPrefix>
                                    <ArrowRight className="h-4 w-4" />
                                </ListItemPrefix>
                                {role.name}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </CardBody>
        </Card>
    )
}

export default RoleList
