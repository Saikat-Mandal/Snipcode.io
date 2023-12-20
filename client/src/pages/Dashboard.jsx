import React, { useEffect, useState } from 'react'
import Layout from '../containers/Layout'
import Profiletabs from '../components/Profiletabs'
import image from "../assets/shopping.png"
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeToken } from '../feature/todo/userSlice';
function Dashboard() {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const dispatch = useDispatch()

    // logout function 
    const onLogout = async () => {
        try {
            await axios.get("http://localhost:4000/auth/logout", { withCredentials: true })
            dispatch(removeToken())
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/auth/getuserbyid", { withCredentials: true })
                setUser(res.data)

            } catch (error) {
                alert(error)
            }
        }
        getUserData()
    }, [])

    const data = [
        {
            id: 1,
            title: "Summary",
            path: "/dashboard/summary"
        },

        {
            id: 5,
            title: "Settings",
            path: "/dashboard/settings"
        },

    ]
    return (
        <Layout>
            <div className='w-full h-screen flex justify-center relative'>
                <img src={image} alt="" className='absolute right-0  -z-20' />
                <img src={image} alt="" className='absolute -left-20  -z-20' />
                <div className='w-2/3 p-6 flex shadow-2xl bg-white'>
                    {user ? <>
                        <div className='1/4'>
                            <div className=' h-64 w-64 border-2'>
                                <img src={user.dp} alt="" />
                            </div>
                            <ul className='py-6 flex flex-col'>
                                {
                                    data.map(item => <Profiletabs key={item.id} title={item.title} path={item.path} />)
                                }
                                <li onClick={onLogout} className='py-1 rounded-full hover:bg-slate-200 px-2 cursor-pointer'>Logout</li>
                            </ul>
                        </div>
                        <Outlet />
                    </> : <p>Loading...</p>}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard

