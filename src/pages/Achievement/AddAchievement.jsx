import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import AchievementForm from '../../components/Form/AchievementForm/AchievementForm'
import { authorizedRequest } from '../../lib/api'

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

export default function AddAchievement() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const response = await authorizedRequest('post', `/achievements/`, {
            title,
            description,
            date,
            role: id
        })
        setTitle('')
        setDescription('')
        setDate('')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                    <Typography variant="h4" className="mb-6">
                        Achievement Add
                    </Typography>

                    <AchievementForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                        handleSubmit={handleSubmit}
                        titleVerb="Add"
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
