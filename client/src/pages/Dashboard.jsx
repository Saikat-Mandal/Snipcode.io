import React from 'react'
import Layout from '../containers/Layout'
import Profiletabs from '../components/Profiletabs'
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import image from "../assets/shopping.png"
function Dashboard() {
    const data = ["Summary", "Answers", "Questions", "Votes", "Settings"]
    return (
        <Layout>
            <div className='w-full h-screen flex justify-center relative'>
                <img src={image} alt="" className='absolute right-0  -z-20' />
                <img src={image} alt="" className='absolute -left-20  -z-20' />
                <div className='w-2/3 p-6 flex shadow-2xl bg-white'>
                    <div className='1/4'>
                        <div className=' h-64 w-64 border-2'>
                            <img src="" alt="" />
                        </div>
                        <ul className='py-6'>
                            {
                                data.map(item => <Profiletabs title={item} />)
                            }

                        </ul>
                    </div>
                    <div className='w-3/4 p-4'>
                        <h1 className='text-5xl'>Saikat Mandal</h1>
                        <div className='flex items-center py-4 gap-x-4'>
                            <div className='flex items-center gap-x-2 text-orange-600'>
                                <LiaBirthdayCakeSolid />
                                <p className='text-gray-600'>11/04/2002</p>
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
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard