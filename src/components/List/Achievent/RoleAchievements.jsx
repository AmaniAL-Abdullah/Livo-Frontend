import React from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../../lib/api'

function RoleAchievements() {
    const { id } = useParams() 
    const [achievements, setAchievements] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAchievements() {
            const response = await authorizedRequest('get', `/roles/${id}/achievements/`)
            setAchievements(response.data)
        }
        fetchAchievements()
    }, [id])

    return (
        <div>
            <h2>Achievements the Role</h2>
            <Link to={`/roles/${id}/achievements/add`}> Add Achievements</Link>
            <ul>
                {achievements.map(achievement => (
                    <li key={achievement.id}>
                        <Link to={`/achievement/${achievement.id}`}>{achievement.title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate(`/roles/${id}`)}> Back</button>
        </div>
    )
}

export default RoleAchievements
