import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import AchievementForm from '../../components/Form/AchievementForm/AchievementForm'
import { authorizedRequest } from '../../lib/api'

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

function AchievementEdit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    async function getCurrentAchievementData() {
        const response = await authorizedRequest('get', `/achievement/${id}/`)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(response.data.date)
    }

    useEffect(() => {
        getCurrentAchievementData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        await authorizedRequest('patch', `/achievement/${id}/`, {
            title,
            description,
            date,
            role: id,
        })
        navigate(`/achievement/${id}`)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                    <Typography variant="h4" className="mb-6">
                        Edit Task Page
                    </Typography>

                    <AchievementForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                        handleSubmit={handleSubmit}
                        titleVerb="Edit"
                    />

                    <div className="mt-6">
                        <Button variant="outlined" color="gray" onClick={() => navigate(`/achievement/${id}`)}>
                            Back
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AchievementEdit
