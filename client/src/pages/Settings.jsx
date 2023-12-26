import React, { useState } from 'react'
import axios from "axios"
import { downloadFile, uploadFile } from '../firebase/firebaseRoutes'
import { useDispatch } from 'react-redux'
import { addDp } from '../feature/todo/userSlice'
function Settings() {

    const [fileState, setFileState] = useState(null)
    const dispatch = useDispatch()
    // const [userId, setUserId] = useState("")

    const [states, setStates] = useState({
        firstname: "",
        lastname: "",
        location: "",
        github: "",
        twitter: "",
        website: "",
    })

    const getUserId = async () => {
        try {
            const res = await axios.get("http://localhost:4000/auth/getuserbyid", { withCredentials: true })
            return res.data._id
        } catch (error) {
            alert(error)
        }
    }

    // supabase file upload 
    const uploadToFirebase = async () => {
        try {
            const userId = await getUserId()
            await uploadFile(fileState, userId)
            const gotUrl = await downloadFile(fileState, userId)
            return gotUrl
        } catch (error) {
            console.log(error);
        }
    }

    console.log(fileState);


    // updating 
    const onUpdate = async () => {
        try {
            let dpUrl = ""
            let data = null
            if (fileState.name) {
                dpUrl = await uploadToFirebase()
                data = {
                    ...states,
                    dp: dpUrl
                }
            }

            else {
                console.log("else worked");
                data = {
                    ...states
                }
            }

            await axios.put("http://localhost:4000/auth/update", data, { withCredentials: true })
            alert("updated successfully!")
            setStates({
                firstname: "",
                lastname: "",
                location: "",
                github: "",
                twitter: "",
                website: "",
            });
            if (fileState.name) {
                dispatch(addDp(dpUrl))
                setFileState(null)
            }
        } catch (error) {
            alert(error)
        }
    }

    // file handling 
    const handleFileChange = (e) => {
        setFileState(e.target.files[0]);
    }

    const handleState = (e) => {
        setStates(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className='w-full p-4'>
            <input onChange={handleFileChange} type="file" name="uploadfile" id="img" className=' hidden' />
            <label className=' rounded-md border-2 border-gray-500 cursor-pointer p-2 inline-block' htmlFor="img">{fileState ? fileState.name : "Change profile picture"}</label>
            <div className='flex justify-between py-4'>
                <input onChange={handleState} name='firstname' className=' bg-transparent outline-none border-gray-500 border-2 rounded-full p-2' type="text" placeholder='First Name' />
                <input onChange={handleState} name='lastname' className=' bg-transparent outline-none border-gray-500 border-2 rounded-full p-2' type="text" placeholder='Last Name' />
            </div>
            <div className=' flex flex-col gap-4'>
                <input onChange={handleState} name='location' className=' bg-transparent outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Location Link' />
                <input onChange={handleState} name='github' className=' bg-transparent outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Github Link' />
                <input onChange={handleState} name='twitter' className=' bg-transparent outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='X/Twitter Link' />
                <input onChange={handleState} name='website' className=' bg-transparent outline-none border-2 border-gray-500 rounded-full p-2' type="text" placeholder='Website Link' />
            </div>
            <button onClick={onUpdate} className='px-4 py-2  hover:scale-105 mt-4 bg-blue-600 text-white rounded-full'>Update</button>
        </div>
    )
}

export default Settings