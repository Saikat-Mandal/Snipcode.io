import React, { useState } from 'react'
import Layout from '../containers/Layout'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import image from "../assets/comp.png"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Asktags from '../components/Asktags';
function Ask() {
    // states for different values 
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [tagsArray, setTagsArray] = useState([])
    const [tag, setTag] = useState("")
    const navigate = useNavigate()

    const onPostQuestion = async () => {
        const data = {
            title: title,
            body: body,
            tags: tagsArray
        }
        try {
            await axios.post("http://localhost:4000/question/askquestion", data, { withCredentials: true })
            navigate("/home")
        } catch (error) {
            alert(error)
        }
    }

    const checkIfButtonShouldBeDisabled = () => {
        return tagsArray.length === 5
    }

    const addTagToArray = () => {
        setTagsArray(prev => [...prev, tag])
        setTag("")
    }

    const removeTagFromArray = (i) => {
        setTagsArray(prev => {
            const temp = [...prev]
            temp.splice(i, 1);
            return temp
        })
    }

    return (
        <Layout>
            <div className=' w-full h-screen '>
                <div className='flex justify-center relative'>
                    <div className='w-4/6 '>
                        <h1 className='py-8 text-3xl font-extrabold'>Ask a public question </h1>
                        <div className='w-3/4 shadow-xl p-2'>
                            <h1 className='text-xl font-bold'>Title</h1>
                            <p className='text-xs py-2'>Be specific and imagine you're asking a question to another person</p>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='e.g. What is an arrow function in javascript?' className='w-full p-2 rounded-full border text-xs' />
                            <h1 className='pt-4 text-xl font-bold'>Body</h1>
                            <p className='py-2 text-xs'>Include all the information someone would need to answer your question</p>
                            <div className=' w-full h-60 object-contain overflow-auto'>
                                <ReactQuill theme="snow" value={body} onChange={setBody} className='h-full' />
                            </div>
                            {/* tags  */}
                            <h1 className='pt-4 text-xl font-bold'>Tags </h1>
                            <p className='pb-2text-xs'>Add up to 5 tags to describe what your question is about</p>
                            <input className='my-4 w-full p-2 rounded-full border text-xs' placeholder='e.g. (c# spring javascript)' value={tag} onChange={(e) => setTag(e.target.value)} />
                            <div className='gap-x-4 flex pb-3'>
                                {tagsArray.length > 0 ? tagsArray.map((item, index) => <Asktags id={index} onClick={removeTagFromArray} key={index} text={item} />) : <p className='text-xs pb-2'>No tags added</p>}
                            </div>
                            <div className=' py-1 '>
                                <button disabled={checkIfButtonShouldBeDisabled()} onClick={addTagToArray} className={` px-4 py-2 text-xs hover:scale-105 ${tagsArray.length === 5 ? " bg-blue-300 cursor-not-allowed" : "bg-blue-600"} text-white rounded-full`}>Add</button>
                            </div>

                            <div className='py-6 flex justify-end'>
                                <button onClick={onPostQuestion} className=' px-4 py-2 text-xs hover:scale-105 bg-blue-600 text-white rounded-full'>Submit</button>
                            </div>
                        </div>
                        <img src={image} alt="" className='absolute w-96 h-auto top-10 -right-20' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Ask