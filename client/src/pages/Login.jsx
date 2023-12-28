import React, { useState } from 'react'
import { Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../containers/Layout'
import Button from '../components/Button';
import { useDispatch } from "react-redux"
import { addDp, updateToken } from "../feature/todo/userSlice"
import axios from 'axios';

function Login() {

    // states for storing email and password 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const getUserData = async () => {
        try {
            const res = await axios.get("http://localhost:4000/auth/getuserbyid", { withCredentials: true })
            dispatch(addDp(res.data.dp))

        } catch (error) {
            alert(error)
        }
    }

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
            getUserData();
        } catch (error) {
            alert(error)
            setEmail("")
            setPassword("")
        }
    }



    return (
        <Layout>
            <div className=' w-full h-screen'>
                <div className=' w-full flex justify-center h-screen mt-20'>
                    <div className="flex md:w-1/3 ">
                        <Container>
                            <div className=' text-center'>
                                <h1 className=' text-3xl font-medium'>AskIT.io</h1>
                            </div>
                            <div className=' mt-10'>
                                <Typography variant="h5" gutterBottom className=" font-bold">
                                    Login
                                </Typography>
                                <form className='' >
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Email*' />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Password*' />

                                </form>
                                <Button onClick={onLogin} text="Login" />
                            </div>

                            <p className=' py-6'>Don't have an account ? <Link to="/register" className=' text-blue-700 hover:underline' > Click here to Signup</Link> </p>
                        </Container>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login