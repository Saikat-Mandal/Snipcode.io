import React, { useEffect, useState } from 'react'
import Layout from '../containers/Layout'
import Profiletabs from '../components/Profiletabs'
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import image from "../assets/shopping.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    // logout function 
    const onLogout = async () => {
        try {
            await axios.get("http://localhost:4000/auth/logout", { withCredentials: true })
            localStorage.removeItem("userId");
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
            onClick: null
        },
        {
            id: 2,
            title: "Answers",
            onClick: null
        },
        {
            id: 3,
            title: "Questions",
            onClick: null
        },
        {
            id: 4,
            title: "Votes",
            onClick: null
        },
        {
            id: 5,
            title: "Settings",
            onClick: null
        },
        {
            id: 6,
            title: "Logout",
            onClick: onLogout
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
                            <ul className='py-6'>
                                {
                                    data.map(item => <Profiletabs key={item.id} title={item.title} onClick={item.onClick} />)
                                }

                            </ul>
                        </div>
                        <div className='w-3/4 p-4'>
                            <h1 className='text-5xl'>{user.firstname + " " + user.lastname}</h1>
                            <div className='flex items-center py-4 gap-x-4'>
                                <div className='flex items-center gap-x-2 text-orange-600'>
                                    <LiaBirthdayCakeSolid />
                                    <p className='text-gray-600'>{user.createdAt}</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-orange-600'>
                                    <GrLocation />
                                    <p className='text-gray-600'>Pune</p>
                                </div>
                            </div>
                            {/* changes here on tab change  */}
                            <div className='mt-4'>
                                <div className=''>
                                    <h1 className='text-2xl' >Stars</h1>
                                </div>
                                {/* stars won  */}
                                <div className=' h-64  border-2 p-4'>
                                    <p className=' text-gray-500 text-sm'>Please contribute more to earn stars..</p>
                                </div>
                            </div>
                        </div>
                    </> : <p>Loading...</p>}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard