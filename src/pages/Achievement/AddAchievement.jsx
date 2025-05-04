import React from 'react'
import AchievementForm from '../../components/Form/AchievementForm/AchievementForm'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'


export default function AddAchievement() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const response = await authorizedRequest(
            'post', `/achievements/`, {
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
        <div>
            <h2> Achievement Add</h2>
            <AchievementForm 
                            title={title}
                            setTitle={setTitle}
                            description={description}
                            setDescription={setDescription}
                            date={date}
                            setDate = {setDate}

                            handleSubmit={handleSubmit}
                            titleVerb = 'Add'
            />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        
    )
}
