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
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Email*' />
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Username*' />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Password*' />
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Confirm password*' />
                                <div className=' flex flex-col md:flex-row gap-x-4'>
                                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='First Name' />
                                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} className='px-4 my-2 bg-transparent outline-none border-2 border-gray-500 rounded-full p-2 w-full' type="text" placeholder='Last Name*' />
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