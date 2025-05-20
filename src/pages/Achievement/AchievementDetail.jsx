import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router-dom'
import { ChevronLeft } from "lucide-react"

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
        <div className="min-h-screen flex justify-center items-center px-4 py-10">
            <Card className="w-full max-w-2xl shadow-lg p-6 border border-gray-200 rounded-xl">
                <CardBody className="space-y-4">
                <div className="pb-6">
                        <Link
                            to={`/roles`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ef9131]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
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
                            <Button className="rounded-[100px]" color="red" onClick={showConfirmDelete}>
                                Delete
                            </Button>
                        )}

                        <Button className=" rounded-[100px] bg-[#f48362] hover:bg-gray-400" onClick={() => navigate(`/achievement/${id}/edit`)}>
                            Edit
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AchievementDetail
