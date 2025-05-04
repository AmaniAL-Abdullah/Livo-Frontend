import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router'

function AchievementDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [achievement, setAchievement] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [roleId, setRoleId] = useState(null)

    useEffect(() => {
        async function fetchAchievement() {
            try {
                const response = await authorizedRequest('get', `/achievement/${id}/`)
                setAchievement(response.data)
                setRoleId(response.data.role)
            } catch (err) {
                console.log(err)
                setErrorMsg('Something went wrong')
            }
        }
        fetchAchievement()
    }, [id])

    async function deleteAchievement() {
        try {
            const response = await authorizedRequest('delete', `/achievement/${id}/`)
            if (response.status === 204) {
                navigate('/')
            }
        } catch (err) {
            console.log(' Achievement deletion failed:', err)
        }
    }

    function showConfirmDelete() {
        setDeleteConfirm(true)
    }

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!achievement) return <h1>Loading...</h1>

    return (
        <div>
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
            <p>Date: {achievement.date}</p>
            {
                deleteConfirm
                    ?
                    <button onClick={deleteAchievement}>Are you Sure?</button>
                    :
                    <button onClick={showConfirmDelete}>Delete</button>
            }
            <Link to={`/achievement/${id}/edit`}> Edit</Link>
            <button onClick={() => navigate(`/roles/${roleId}/achievements`)}> Back</button>
        </div>
    )
}

export default AchievementDetail
