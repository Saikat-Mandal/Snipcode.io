import React, { useEffect, useState } from 'react'
import Home from './Home'
import Usercomponent from '../components/Usercomponent'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/auth/allusers", { withCredentials: true })
                setUsers(res.data)
                // console.log(res);
            } catch (error) {
                alert(error)
            }
        }
        getData()
    }, [])

    return (
        <Home>
            <div className=' w-3/5 h-screen overflow-auto p-4'>
                <h1 className=' text-2xl pb-3'>Thank's to all the devs for joining us...</h1>
                <div className='w-full rounded-xl bg-orange-500 p-4 flex justify-between gap-3 flex-wrap'>
                    {
                        users.length > 0 ? (users.map(item => {
                            return <Usercomponent
                                name={item.firstname + " " + item.lastname}
                                joined={item.createdAt}
                            />
                        })) : (<p>No users found</p>)
                    }


                </div>
            </div>
        </Home>
    )
}

export default Users