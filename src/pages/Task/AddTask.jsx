import React from 'react'
import TaskForm from '../../components/Form/TaskForm/TaskForm'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import { ChevronLeft } from "lucide-react"
import { Link } from 'react-router-dom'


import {
    Card,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react'

function AddTask() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStart_Date] = useState('')
    const [end_date, setEnd_Date] = useState('')
    const [status, setStatus] = useState('not_started')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const response = await authorizedRequest(
            'post',
            `/tasks/`,
            {
                title,
                description,
                start_date,
                end_date: end_date || null,
                status,
                role: id
            }
        )
        setTitle('')
        setDescription('')
        setStart_Date('')
        setEnd_Date('')
        setStatus('')
    }

    return (
        <div className="min-h-screen flex justify-center items-center px-4 py-10">

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
                        Task Add
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
                        titleVerb='Add'
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default AddTask
