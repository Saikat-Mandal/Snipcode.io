import React, { useEffect, useState } from 'react'
import Home from './Home'
import { useLocation } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import axios from 'axios'
import Comments from '../components/Comments';

function SingleQuestion() {
    const location = useLocation()

    const questionId = location.state.key

    const [question, setQuestion] = useState(null)
    const [thisBody, setThisBody] = useState('');
    const [refresh, setRefresh] = useState(false);
    // const [commentsArray, setCommentsArray] = useState([])
    const [comment, setComment] = useState("")

    useEffect(() => {
        const getQuestion = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/question/getquestionbyid?q=${questionId}`, { withCredentials: true })
                setQuestion(res.data)
            } catch (error) {
                alert(error)
            }
        }
        getQuestion()
    }, [refresh])

    // update upvote 
    const updateVote = async () => {
        try {
            const data = {
                id: questionId
            }
            const res = await axios.put("http://localhost:4000/question/updateupvote", data, { withCredentials: true })
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // update downvote 
    const downvote = async () => {
        try {
            const data = {
                id: questionId
            }
            await axios.put("http://localhost:4000/question/updatedownvote", data, { withCredentials: true })
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // post comment  
    const postComment = async () => {
        try {
            const data = {
                comment: comment,
                id: questionId
            }
            axios.post("http://localhost:4000/question/addcomment", data, { withCredentials: true })
            setComment("")
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }
    // post custom answer 
    const postAnswer = async () => {
        try {

        } catch (error) {
            alert(error)
        }
    }

    console.log(question);
    return (
        <Home>


            {question !== null ? (<div className=' w-3/5 h-screen overflow-auto px-3'>
                <div className=' bg-orange-600 p-6 text-white rounded-t-lg '>
                    <div className='flex justify-between'>
                        <div className='w-2/3 '>
                            <h1 className='text-3xl'>{question.title}</h1>
                            <div className='flex items-center gap-x-2'>
                                <p className=' text-xs' ><span className='font-bold' >Asked:</span> {question.createdAt}</p>
                                <p className=' text-xs' ><span className='font-bold' >Updated:</span> {question.updatedAt}</p>
                                <p className=' text-xs' ><span className='font-bold' >Views:</span> 0</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4 text-2xl'>
                            <span onClick={updateVote} className=' cursor-pointer hover:scale-110'><IoMdThumbsUp /></span>
                            <p>{question.upvotes - question.downvotes}</p>
                            <span onClick={downvote} className=' cursor-pointer hover:scale-110'> <IoMdThumbsDown /></span>
                        </div>
                    </div>
                </div>
                {/* body   */}
                <div className='shadow-lg p-6' >
                    <div className='h-36 border border-dashed p-2'>
                        {question.body}
                    </div>
                    {/* comment  */}
                    <div>
                        <p className='py-3'>Comments:  </p>
                        <div>
                            {question.comments.length > 0 ? question.comments.map(item => {
                                return <Comments
                                    key={item.id}
                                    title={item.comment}
                                    createdAt={item.createdAt}
                                    updatedAt={item.updatedAt}
                                    user={item.userId}
                                />
                            }) : <p className='text-xs text-gray-400' >No comments yet</p>}
                        </div>
                        {/* add a comment  */}
                        <div className='pt-4 '>
                            <input value={comment} onChange={(e) => setComment(e.target.value)} className=' rounded-full text-xs p-2 border' placeholder='Add a comment...' />
                            <button onClick={postComment} className=' px-3 py-1 text-xs hover:scale-105 bg-blue-600 text-white rounded-full ml-3'>Add</button>
                        </div>
                        {/* answer  */}
                        <div className='py-4'>
                            <p>Add an answer:</p>
                            <div className=' w-full h-60 object-contain overflow-auto'>
                                <ReactQuill theme="snow" value={thisBody} onChange={setThisBody} className='h-full' />
                            </div>
                            <button className=' px-3 py-1 text-xs hover:scale-105 bg-blue-600 text-white rounded-full my-3'>Add your answer</button>
                        </div>

                    </div>
                </div>




                <div>
                </div>

            </div>) : (<p>Loading</p>)}

        </Home>
    )
}

export default SingleQuestion