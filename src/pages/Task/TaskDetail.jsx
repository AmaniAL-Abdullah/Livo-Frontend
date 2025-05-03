import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router'

function TaskDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [roleId, setRoleId] = useState(null)
    

    useEffect(() => {
        async function fetchTask() {
            try {
                const response = await authorizedRequest('get', `/task/${id}/`)
                setTask(response.data)
                setRoleId(response.data.role)
            } catch (err) {
                console.log(err)
                setErrorMsg('Something went wrong')
            }
        }
        fetchTask()
    }, [id])


    async function deleteTask() {
            try {
                const response = await authorizedRequest('delete', `/task/${id}/`)
                if (response.status === 204) {
                    navigate('/')
                }
            } catch (err) {
                console.log(' Task deletion failed:', err)
            }
        }

    function showConfirmDelete() {
            setDeleteConfirm(true)
        }


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!task) return <h1>Loading...</h1>

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Start: {task.start_date}</p>
            <p>End: {task.end_date || 'No end date'}</p>
            {
                deleteConfirm
                    ?
                    <button onClick={deleteTask}>Are you Sure?</button>
                    :
                    <button onClick={showConfirmDelete}>Delete</button>
            }
            <Link to={`/task/${id}/edit`}> Edit</Link>
            <button onClick={() => navigate(`/roles/${roleId}/tasks`)}> Back</button>
        </div>
    )
}

export default TaskDetail
