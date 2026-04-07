import { useState } from "react"
import { useNavigate } from "react-router"
import { setTokens } from "../lib/api"
import axios from "axios"
import { Link } from "react-router"

// UI
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Alert
} from "@material-tailwind/react"

function Login() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/token/`, formData)

            localStorage.setItem('username', formData.username)

            setTokens({
                access: response.data.access,
                refresh: response.data.refresh
            })

            navigate('/roles')
        } catch (err) {
            console.log(err)
            setError('Invalid username or password')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <Card className="w-full max-w-lg rounded-xl border border-gray-200 shadow-md">
                <CardHeader floated={false} shadow={false} className="text-center p-8">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Welcome Back 👋
                    </Typography>
                    <Typography color="gray" className="text-sm font-normal max-w-md mx-auto">
                        Please log in to continue
                    </Typography>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardBody className="space-y-4 px-8">
                        <div>
                            <Typography variant="small" className="font-semibold mb-1">
                                Username
                            </Typography>
                            <Input
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Typography variant="small" className="font-semibold mb-1">
                                Password
                            </Typography>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <Alert color="red">{error}</Alert>}

                        <Button type="submit" fullWidth className="rounded-[100px] bg-[#3a49d9] hover:bg-[#f48362]">
                            Login
                        </Button>
                    </CardBody>
                </form>

                <CardFooter className="text-center px-8 pb-8 pt-0">
                    <Typography variant="small" color="gray">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-700 font-medium">
                            Signup
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
