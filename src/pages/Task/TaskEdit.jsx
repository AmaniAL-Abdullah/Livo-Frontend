import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import TaskForm from '../../components/Form/TaskForm/TaskForm'
import { authorizedRequest } from '../../lib/api'

function TaskEdit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStart_Date] = useState('')
    const [end_date, setEnd_Date] = useState('')

    async function getCurrentTaskData() {
        const response = await authorizedRequest('get', `/task/${id}/`)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setStart_Date(response.data.start_date)
        setEnd_Date(response.data.end_date)
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
            role: id,
        })
        navigate(`/task/${id}`)
    }

    return (
        <div>
            <h2>Edit Task Page</h2>
            <TaskForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                start_date={start_date}
                setStart_Date={setStart_Date}
                end_date={end_date}
                setEnd_Date={setEnd_Date}
                handleSubmit={handleSubmit}
                titleVerb='Edit'
            />
            <button onClick={() => navigate(`/task/${id}`)}> Back</button>
        </div>
    )
}

export default TaskEdit
