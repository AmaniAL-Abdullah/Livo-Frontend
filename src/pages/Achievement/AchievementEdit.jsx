import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import AchievementForm from '../../components/Form/AchievementForm/AchievementForm'
import { authorizedRequest } from '../../lib/api'

import { Link } from 'react-router-dom'
import { ChevronLeft } from "lucide-react"

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

function AchievementEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [roleId, setRoleId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    

    async function getCurrentAchievementData() {
        const response = await authorizedRequest('get', `/achievement/${id}/`)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(response.data.date)
        setRoleId(response.data.role)
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
            role: roleId
        })
        navigate(`/achievement/${id}`)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-3xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody>
                    <div className="pb-6">
                        <Link
                            to={`/achievement/${id}/`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <Typography variant="h4" className="mb-6">
                        Edit Achievement Page
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
                </CardBody>
            </Card>
        </div>
    )
}

export default AchievementEdit
