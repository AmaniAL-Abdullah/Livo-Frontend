import React from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../../lib/api'

function RoleDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [role, setRole] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    async function getSingleRole() {
            try {
                const response = await authorizedRequest('get', `/roles/${id}`)
                setRole(response.data)
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
            getSingleRole()
            console.log(id)
        }, [])


    async function deleteRole() {
            try {
                const response = await authorizedRequest('delete', `/roles/${id}/`)
                if (response.status === 204) {
                    navigate('/')
                }
            } catch (err) {
                console.log(' Role deletion failed:', err)
            }
        }

    function showConfirmDelete() {
            setDeleteConfirm(true)
        }


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!role) return <h1>Loading your Role...</h1>

    return (
        <div>
            <h2>{role.name}</h2>
            <p>{role.description}</p>
            {
                deleteConfirm
                    ?
                    <button onClick={deleteRole}>Are you Sure?</button>
                    :
                    <button onClick={showConfirmDelete}>Delete</button>
            }
            <Link to={`/roles/${id}/edit`}>Edit Role</Link>
            <RoleTasksTable roleId={id} />
            <RoleAchievementsTable roleId={id} />

            
            <button onClick={() => navigate('/')}> Back</button>
        </div>
    )
}

export default RoleDetail


function RoleTasksTable({ roleId }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function fetchTasks() {
            const response = await authorizedRequest('get', `/roles/${roleId}/tasks/`)
            setTasks(response.data)
        }
        fetchTasks()
    }, [roleId])

    if (!tasks.length) return <p>No tasks found for this role.</p>

    return (
        <div>
            <h3>Tasks:</h3>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>
                                <Link to={`/task/${task.id}`}>{task.title}</Link>
                            </td>
                            <td>{task.description}</td>
                            <td>{task.start_date}</td>
                            <td>{task.end_date || '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


function RoleAchievementsTable({ roleId }) {
    const [achievements, setAchievements] = useState([])

    useEffect(() => {
        async function fetchAchievements() {
            const response = await authorizedRequest('get', `/roles/${roleId}/achievements/`)
            setAchievements(response.data)
        }
        fetchAchievements()
    }, [roleId])

    if (!achievements.length) return <p>No achievements found for this role.</p>

    return (
        <div>
            <h3>Achievements:</h3>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {achievements.map(achievement => (
                        <tr key={achievement.id}>
                            <td>
                                <Link to={`/achievement/${achievement.id}`}>{achievement.title}</Link>
                            </td>
                            <td>{achievement.description}</td>
                            <td>{achievement.start_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
