import React, { useState } from 'react'
import { Container, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../containers/Layout'
import Button from '../components/Button';
import axios from "axios"
function Register() {
    // states for storing email and password 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState("");

    const navigate = useNavigate()

    // register function 
    const onSignUp = async () => {
        const data = {
            email: email,
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
        }
        try {
            const res = await axios.post("http://localhost:4000/auth/register", data, { withCredentials: true })
            console.log(res);
            alert(res.data.message)
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Layout>
            <div className=' w-full flex justify-center h-screen mt-10'>
                <div className="flex md:w-1/3 ">
                    <Container>
                        <div className=' text-center'>
                            <h1 className=' text-3xl font-medium'>Code laborator</h1>
                        </div>
                        <div >
                            <Typography variant="h5" gutterBottom className=" font-bold">
                                Sign up
                            </Typography>
                            <form onSubmit={onSignUp} >
                                <TextField
                                    required
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={" text-white font-normal"}
                                />
                                <TextField
                                    required
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    name="username"
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    className={" text-white font-normal"}
                                />
                                <TextField
                                    required
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className={" font-normal"}
                                />
                                <TextField
                                    required
                                    label="Confirm password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    name="confirm password"
                                    type="password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                    className={" font-normal"}
                                />
                                <div className=' flex flex-col md:flex-row gap-x-4'>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        name="firstname"
                                        type="text"
                                        onChange={(e) => setFirstname(e.target.value)}
                                        value={firstname}
                                        className={" font-normal"}
                                    />
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        name="lastname"
                                        type="text"
                                        onChange={(e) => setLastname(e.target.value)}
                                        value={lastname}
                                        className={" font-normal"}
                                    />
                                </div>

                                <Button onClick={onSignUp} text="Submit" />
                            </form>
                        </div>
                        <p className=' py-6 text-center'>Already have an account ? <Link to="/" className=' text-blue-700 hover:underline' > Click here to Login</Link> </p>
                    </Container>

                </div>
            </div>
        </Layout>
    )
}

export default Register