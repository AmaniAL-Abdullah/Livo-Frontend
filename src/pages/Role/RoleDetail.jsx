import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../../lib/api'

import {
    Card,
    Typography,
    Chip,
    CardBody,
    Button,
}
    from "@material-tailwind/react"


function RoleDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [role, setRole] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    async function getSingleRole() {
        try {
            const response = await authorizedRequest('get', `/roles/${id}`)
            setRole(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }

    useEffect(() => {
        getSingleRole()
        console.log(id)
    }, [])

    async function deleteRole() {
        try {
            const response = await authorizedRequest('delete', `/roles/${id}/`)
            if (response.status === 204) {
                navigate('/')
            }
        } catch (err) {
            console.log('Role deletion failed:', err)
        }
    }

    function showConfirmDelete() {
        setDeleteConfirm(true)
    }

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!role) return <h1>Loading your Role...</h1>

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <Card className="max-w-5xl mx-auto p-6 shadow-lg">
                <CardBody className="space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <Typography variant="h4">{role.name}</Typography>
                            <Typography color="gray" className="mt-1">{role.description}</Typography>
                        </div>
                        <div className="space-x-2">
                            {deleteConfirm ? (
                                <Button color="red" onClick={deleteRole}>
                                    Are you sure?
                                </Button>
                            ) : (
                                <Button color="red" onClick={showConfirmDelete}>
                                    Delete
                                </Button>
                            )}
                            <Link to={`/roles/${id}/edit`}>
                                <Button color="blue">Edit Role</Button>
                            </Link>
                        </div>
                    </div>

                    <RoleTasksTable roleId={id} />
                    <RoleAchievementsTable roleId={id} />

                    <div className="pt-4">
                        <Button variant="outlined" color="gray" onClick={() => navigate('/')}>
                            Back
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default RoleDetail




function RoleTasksTable({ roleId }) {
    const [tasks, setTasks] = useState([]);

    const statusColors = {
        not_started: "amber",
        in_progress: "indigo",
        completed: "green",
        cancelled: "red",
    }

    const statusLabels = {
        not_started: "🕓 Not Started",
        in_progress: "⚙️ In Progress",
        completed: "✅ Completed",
        cancelled: "❌ Cancelled",
    }

    useEffect(() => {
        async function fetchTasks() {
            const response = await authorizedRequest("get", `/roles/${roleId}/tasks/`)
            setTasks(response.data);
        }
        fetchTasks()
    }, [roleId])

    if (!tasks.length) return <p className="text-center text-gray-600">No tasks found for this role.</p>;

    return (
        <Card className="mt-8 shadow-lg border border-gray-200 rounded-xl">
            <CardBody className="overflow-x-auto px-6 py-4">
                <Typography variant="h6" className="mb-4 text-gray-800">
                    Tasks
                </Typography>
                <Link
                    to={`/roles/${roleId}/tasks/add`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                    + Add New Task
                </Link>
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-blue-gray-50">
                            <th className="p-3"><Typography variant="small" className="font-bold">Title</Typography></th>
                            <th className="p-3"><Typography variant="small" className="font-bold">Description</Typography></th>
                            <th className="p-3"><Typography variant="small" className="font-bold">Start Date</Typography></th>
                            <th className="p-3"><Typography variant="small" className="font-bold">End Date</Typography></th>
                            <th className="p-3"><Typography variant="small" className="font-bold">Status</Typography></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task.id} className="even:bg-blue-gray-50">
                                <td className="p-3">
                                    <Link to={`/task/${task.id}`} className="text-blue-600 hover:underline">
                                        {task.title}
                                    </Link>
                                </td>
                                <td className="p-3">{task.description}</td>
                                <td className="p-3">{task.start_date}</td>
                                <td className="p-3">{task.end_date || "—"}</td>
                                <td className="p-3">
                                    <Chip
                                        size="sm"
                                        color={statusColors[task.status]}
                                        value={statusLabels[task.status]}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}



function RoleAchievementsTable({ roleId }) {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        async function fetchAchievements() {
            const response = await authorizedRequest('get', `/roles/${roleId}/achievements/`)
            setAchievements(response.data);
        }
        fetchAchievements()
    }, [roleId])

    if (!achievements.length)
        return <p className="text-center text-gray-600">No achievements found for this role.</p>

    return (
        <Card className="mt-8 shadow-lg border border-gray-200 rounded-xl">
            <CardBody className="overflow-x-auto px-6 py-4">
                <Typography variant="h6" className="mb-4 text-gray-800">
                    Achievements
                </Typography>
                <Link
                    to={`/roles/${roleId}/achievements/add`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                    + Add Achievement
                </Link>
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-blue-gray-50">
                            <th className="p-3">
                                <Typography variant="small" className="font-bold">
                                    Title
                                </Typography>
                            </th>
                            <th className="p-3">
                                <Typography variant="small" className="font-bold">
                                    Description
                                </Typography>
                            </th>
                            <th className="p-3">
                                <Typography variant="small" className="font-bold">
                                    Date
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {achievements.map((achievement) => (
                            <tr key={achievement.id} className="even:bg-blue-gray-50">
                                <td className="p-3">
                                    <Link to={`/achievement/${achievement.id}`} className="text-blue-600 hover:underline">
                                        {achievement.title}
                                    </Link>
                                </td>
                                <td className="p-3">{achievement.description}</td>
                                <td className="p-3">{achievement.start_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}
