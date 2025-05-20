import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import TaskForm from '../../components/Form/TaskForm/TaskForm'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router-dom'
import { ChevronLeft } from "lucide-react"

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

function TaskEdit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStart_Date] = useState('')
    const [end_date, setEnd_Date] = useState('')
    const [status, setStatus] = useState('not_started')

    async function getCurrentTaskData() {
        const response = await authorizedRequest('get', `/task/${id}/`)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setStart_Date(response.data.start_date)
        setEnd_Date(response.data.end_date)
        setStatus(response.data.status)
    }

    useEffect(() => {
        getCurrentTaskData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        await authorizedRequest('patch', `/task/${id}/`, {
            title,
            description,
            start_date,
            end_date,
            status,
        })
        navigate(`/task/${id}`)
    }

    return (
        <div className="min-h-screen flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                    <div className="pb-6">
                        <Link
                            to={`/task/${id}`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <Typography variant="h4" className="mb-6">
                        Edit Task Page
                    </Typography>

                    <TaskForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        start_date={start_date}
                        setStart_Date={setStart_Date}
                        end_date={end_date}
                        setEnd_Date={setEnd_Date}
                        status={status}
                        setStatus={setStatus}
                        handleSubmit={handleSubmit}
                        titleVerb='Edit'
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default TaskEdit