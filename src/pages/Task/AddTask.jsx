import React from 'react'
import TaskForm from '../../components/Form/TaskForm/TaskForm'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'

function AddTask() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStart_Date] = useState('')
    const [end_date, setEnd_Date]= useState('')
    const [status, setStatus] = useState('not_started')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const response = await authorizedRequest(
            'post', `/tasks/`, {
                title,
                description,
                start_date, 
                end_date: end_date || null, 
                status,
                role: id})
        setTitle('')
        setDescription('')
        setStart_Date('')
        setEnd_Date('')
        setStatus('')
    }


    return (
        <div>
            <h2> Task Add</h2>
            <TaskForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                start_date={start_date}
                setStart_Date = {setStart_Date}
                end_date = {end_date}
                setEnd_Date = {setEnd_Date}
                status ={status}
                setStatus = {setStatus}
                handleSubmit={handleSubmit}
                titleVerb = 'Add'
            />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default AddTask



