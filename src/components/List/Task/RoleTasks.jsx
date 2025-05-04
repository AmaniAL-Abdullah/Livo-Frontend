import { useParams, Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../../lib/api'

function RoleTasks() {
    const { id } = useParams() 
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchTasks() {
            const response = await authorizedRequest('get', `/roles/${id}/tasks/`)
            setTasks(response.data)
        }
        fetchTasks()
    }, [id])

    return (
        <div>
            <h2>Taks the Role</h2>
            <Link to={`/roles/${id}/tasks/add`}> Add Task</Link>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate(`/roles/${id}`)}> Back</button>
        </div>
    )
}

export default RoleTasks
