import React from 'react'
import TaskForm from '../../components/Form/TaskForm/TaskForm'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'


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
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
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

                    <div className="mt-6">
                        <Button variant="outlined" color="gray" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddTask
