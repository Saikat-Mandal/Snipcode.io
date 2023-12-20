import React, { useState } from 'react'
import { Container, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../containers/Layout'
import Button from '../components/Button';
import { useDispatch } from "react-redux"
import { updateToken } from "../feature/todo/userSlice"
import axios from 'axios';

function Login() {

    // states for storing email and password 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const navigate = useNavigate()


    // register function 
    const onLogin = async () => {
        const data = {
            email: email,
            password: password,

        }
        try {
            const res = await axios.post("http://localhost:4000/auth/login", data, { withCredentials: true })
            alert(res.data.message)
            dispatch(updateToken(res.data.token))
            navigate("/home")
        } catch (error) {
            alert(error)
            setEmail("")
            setPassword("")
        }
    }


    return (
        <Layout>
            <div className='w-full h-screen'>
                <div className=' w-full flex justify-center h-screen mt-20'>
                    <div className="flex md:w-1/3 ">
                        <Container>
                            <div className=' text-center'>
                                <h1 className=' text-3xl font-medium'>Code laborator</h1>
                            </div>
                            <div className=' mt-10'>
                                <Typography variant="h5" gutterBottom className=" font-bold">
                                    Login
                                </Typography>
                                <form >
                                    <TextField
                                        required
                                        label="Email or Username"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        name="email"
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
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
                                </form>
                                <Button onClick={onLogin} text="Login" />
                            </div>

                            <p className=' py-6 text-center'>Don't have an account ? <Link to="/register" className=' text-blue-700 hover:underline' > Click here to Signup</Link> </p>
                        </Container>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login