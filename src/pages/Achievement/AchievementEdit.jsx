import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import AchievementForm from '../../components/Form/AchievementForm/AchievementForm'
import { authorizedRequest } from '../../lib/api'

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
        <div>
            <h2>Edit Task Page</h2>
            <AchievementForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                date={date}
                setDate={setDate}

                handleSubmit={handleSubmit}
                titleVerb='Edit'
            />
            <button onClick={() => navigate(`/achievement/${id}`)}> Back</button>
        </div>
    )
}

export default AchievementEdit
