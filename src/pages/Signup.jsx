import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { setTokens } from '../lib/api'

// UI Components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Alert
} from '@material-tailwind/react'

function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/signup/',
                { username, email, password }
            )
            console.log(response.data)
            setTokens(response.data)
            navigate('/login')
        } catch (err) {
            console.log(err)
            setError('Signup failed. Please check your info.')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <Card className="w-full max-w-lg rounded-xl border border-gray-200 shadow-md">
                <CardHeader floated={false} shadow={false} className="text-center p-8">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Create an Account
                    </Typography>
                    <Typography color="gray" className="text-sm font-normal max-w-md mx-auto">
                        Join us and start exploring awesome content!
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
                                placeholder="Choose a username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Typography variant="small" className="font-semibold mb-1">
                                Email
                            </Typography>
                            <Input
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <Alert color="red">{error}</Alert>}

                        <Button type="submit" fullWidth className="bg-blue-600 hover:bg-blue-700">
                            Sign Up
                        </Button>
                    </CardBody>
                </form>

                <CardFooter className="text-center px-8 pb-8 pt-0">
                    <Typography variant="small" color="gray">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-700 font-medium">
                            Login
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Signup
