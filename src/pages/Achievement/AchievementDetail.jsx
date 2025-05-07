import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router-dom'

import {
    Card,
    CardBody,
    Typography,
    Button
} from '@material-tailwind/react'

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
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-2xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody className="space-y-4">
                    <Typography variant="h4" className="text-gray-900">
                        {achievement.title}
                    </Typography>

                    <Typography variant="paragraph" className="text-gray-700">
                        {achievement.description}
                    </Typography>

                    <Typography variant="small" color="gray">
                        Date: {achievement.date}
                    </Typography>

                    <div className="flex gap-4 mt-6">
                        {deleteConfirm ? (
                            <Button color="red" onClick={deleteAchievement}>
                                Are you Sure?
                            </Button>
                        ) : (
                            <Button color="red" onClick={showConfirmDelete}>
                                Delete
                            </Button>
                        )}

                        <Button onClick={() => navigate(`/roles/${roleId}/achievements`)}>
                            Back
                        </Button>

                        <Button color="blue" onClick={() => navigate(`/achievement/${id}/edit`)}>
                            Edit
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AchievementDetail
