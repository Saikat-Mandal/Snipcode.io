import React, { useEffect, useState } from 'react'
import Layout from '../containers/Layout'
import Profiletabs from '../components/Profiletabs'
import image from "../assets/shopping.png"
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { addDp, removeDp, removeToken } from '../feature/todo/userSlice';
function Dashboard() {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const dispatch = useDispatch()
    // logout function 
    const onLogout = async () => {
        try {
            await axios.get("http://localhost:4000/auth/logout", { withCredentials: true })
            dispatch(removeToken())
            dispatch(removeDp())
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/auth/getuserbyid", { withCredentials: true })
                dispatch(addDp(res.data.dp))
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



    const darkMode = useSelector(state => state.darkMode)
    const backgroundColor = darkMode && " bg-zinc-900"
    const textColor = darkMode && " text-white"
    const hoverColor = darkMode && " hover:bg-zinc-700"
    const dp = useSelector(state => state.dp)

    return (


        <Layout>
            <div className='w-full h-screen flex justify-center relative'>
                <img src={image} alt="" className='absolute right-0  -z-20' />
                <img src={image} alt="" className='absolute -left-20  -z-20' />
                <div className={backgroundColor + textColor + ' w-2/3 p-6 flex shadow-2xl bg-white transition duration-4000 ease-in-out flex'}>
                    <div className='1/4'>
                        <div className=' h-64 w-64 border-2 overflow-hidden'>
                            <img src={dp} alt="" className=' h-full w-full object-contain' />
                        </div>

                        <ul className='py-6 flex flex-col cursor-pointer'>
                            {
                                data.map(item => <Profiletabs key={item.id} title={item.title} path={item.path} hoverColor={hoverColor} textColor={textColor} />)
                            }
                            <li onClick={onLogout} className={' py-1 rounded-full hover:bg-slate-200 px-2 cursor-pointer' + hoverColor}>Logout</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div className=' p-4'>
                            <h1 className='text-5xl'>{user?.firstname + " " + user?.lastname}</h1>
                            <div className='flex items-center py-4 gap-x-4'>
                                <div className='flex items-center gap-x-2 text-orange-600'>
                                    <LiaBirthdayCakeSolid />
                                    <p className='text-gray-600'>{user?.createdAt}</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-orange-600'>
                                    <GrLocation />
                                    <p className='text-gray-600'>Pune</p>
                                </div>
                            </div>

                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard

