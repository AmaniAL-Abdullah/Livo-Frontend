import React from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../../lib/api'


function TaskDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [tasks, setTasks] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    async function getSingleTask() {
        try {
            const response = await authorizedRequest('get', `/roles/${id}/tasks/`)
            setTasks(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }

    useEffect(() => {
        getSingleTask()
        console.log(id)
    }, [])



    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!tasks.length) return <h1>Loading your Task...</h1>

    return (
        <div>
            <h2>Task:</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.start_date}</p>
                    <p>{task.end_date || 'No end date'}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskDetail
