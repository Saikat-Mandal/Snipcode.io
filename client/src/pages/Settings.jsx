import React from 'react'
import axios from "axios"
function Settings() {


    const onUpdate = async () => {
        try {
            const res = await axios.put("http://localhost/user/update")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='w-full p-4'>
            <input type="file" name="uploadfile" id="img" className=' hidden' />
            <label className=' rounded-md border-2 border-black cursor-pointer p-2 inline-block' for="img">Change profile picture</label>

            <div className='flex justify-between py-4'>
                <input className='outline-none border-gray-500 border-2 rounded-full p-2' type="text" placeholder='First Name' />
                <input className='outline-none border-gray-500 border-2 rounded-full p-2' type="text" placeholder='Last Name' />
            </div>
            <div className=' flex flex-col gap-4'>
                <input className=' outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Location Link' />
                <input className=' outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Github Link' />
                <input className=' outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='X/Twitter Link' />
                <input className=' outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Website Link' />
            </div>
            <button onClick={onUpdate} className='px-4 py-2  hover:scale-105 mt-4 bg-blue-600 text-white rounded-full'>Update</button>
        </div>
    )
}

export default Settings