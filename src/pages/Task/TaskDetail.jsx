import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../lib/api'

import { Link } from 'react-router-dom'
import { ChevronLeft } from "lucide-react"

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

function TaskDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [roleId, setRoleId] = useState(null)

    useEffect(() => {
        async function fetchTask() {
            try {
                const response = await authorizedRequest('get', `/task/${id}/`)
                setTask(response.data)
                setRoleId(response.data.role)
            } catch (err) {
                console.log(err)
                setErrorMsg('Something went wrong')
            }
        }
        fetchTask()
    }, [id])

    async function deleteTask() {
        try {
            const response = await authorizedRequest('delete', `/task/${id}/`)
            if (response.status === 204) {
                navigate('/')
            }
        } catch (err) {
            console.log('Task deletion failed:', err)
        }
    }

    function showConfirmDelete() {
        setDeleteConfirm(true)
    }

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!task) return <h1>Loading...</h1>

    return (
        <div className="min-h-screen flex justify-center items-center px-4 py-10">
            <Card className="max-w-3xl w-full p-6 shadow-lg border border-gray-200 rounded-xl">
                <CardBody className="space-y-6">
                <div className="pb-6">
                        <Link
                            to={`/roles`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <Typography variant="h4" color="blue-gray">
                        {task.title}
                    </Typography>
                    <Typography color="gray">{task.description}</Typography>
                    <div className="space-y-2">
                        <Typography>Start: <span className="font-medium">{task.start_date}</span></Typography>
                        <Typography>End: <span className="font-medium">{task.end_date || 'No end date'}</span></Typography>
                    </div>

                    <div className="flex gap-4 mt-6 flex-wrap">
                        {deleteConfirm ? (
                            <Button color="red" onClick={deleteTask}>
                                Are you Sure?
                            </Button>
                        ) : (
                            <Button className="rounded-[100px]" color="red" onClick={showConfirmDelete}>
                                Delete
                            </Button>
                        )}

                        <Link to={`/task/${id}/edit`}>
                            <Button className=" rounded-[100px] bg-[#f48362] hover:bg-gray-400">Edit</Button>
                        </Link>

                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default TaskDetail
