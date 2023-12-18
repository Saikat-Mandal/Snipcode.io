import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import axios from 'axios';
function Summary() {

    const [user, setUser] = useState(null)

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
    return (
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

                <div className='mt-4'>
                    <div className=''>
                        <h1 className='text-2xl' >Stars</h1>
                    </div>

                    <div className=' h-64  border-2 p-4'>
                        <p className=' text-gray-500 text-sm'>Please contribute more to earn stars..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary