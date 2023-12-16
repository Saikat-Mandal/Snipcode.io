import React, { useEffect, useState } from 'react'
import Home from './Home'
import { useLocation } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import axios from 'axios'
import Comments from '../components/Comments';
import Answer from '../components/Answer';

function SingleQuestion() {
    const location = useLocation()

    const questionId = location.state.key

    const [question, setQuestion] = useState(null)
    const [thisBody, setThisBody] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [comment, setComment] = useState("")

    useEffect(() => {
        console.log("effect ran");
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
            await axios.put("http://localhost:4000/question/updateupvote", data, { withCredentials: true })
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
            await axios.put("http://localhost:4000/question/addcomment", data, { withCredentials: true })
            setComment("")
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // post answer 
    const postAnswer = async () => {
        try {
            const data = {
                body: thisBody,
                questionId: questionId
            }
            await axios.post("http://localhost:4000/answer/postanswer", data, { withCredentials: true })
            setThisBody("")
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // is answer correct 
    const isAnswerCorrect = async (id) => {
        try {
            const data = {
                answerId: id
            }
            await axios.put("http://localhost:4000/answer/makeanswercorrect", data, { withCredentials: true })
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // add upvote to answer
    const upvoteAnswer = async (id) => {
        try {
            const data = {
                answerId: id
            }
            await axios.put("http://localhost:4000/answer/answerupvote", data, { withCredentials: true })
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }

    // add downvote to answer
    const downvoteAnswer = async (id) => {
        try {
            const data = {
                answerId: id
            }
            await axios.put("http://localhost:4000/answer/answerdownvote", data, { withCredentials: true })
            setRefresh(prev => !prev)
        } catch (error) {
            alert(error)
        }
    }


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
                            <p>{question.upvotes + question.downvotes}</p>
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

                        {/* answers  */}
                        <div className='py-4'>
                            <p className=''>Answers:  </p>
                            <div className='flex flex-col gap-2 overflow-y-auto py-3'>
                                {question.answers.length > 0 ? question.answers.map(item => {
                                    return <Answer
                                        key={item._id}
                                        id={item._id}
                                        body={item.body}
                                        upvotes={item.upvotes}
                                        downvotes={item.downvotes}
                                        correct={item.correct}
                                        createdAt={item.createdAt}
                                        updatedAt={item.updatedAt}
                                        isAnswerCorrect={isAnswerCorrect}
                                        updateVote={upvoteAnswer}
                                        downVote={downvoteAnswer}
                                        user={item.userId.firstname + " " + item.userId.lastname}
                                    />
                                }) : <p className='text-xs text-gray-400' >No comments yet</p>}
                            </div>
                            <p>Add an answer:</p>
                            <div className=' w-full h-60 object-contain overflow-auto'>
                                <ReactQuill theme="snow" value={thisBody} onChange={setThisBody} className='h-full' />
                            </div>
                            <button onClick={postAnswer} className=' px-3 py-1 text-xs hover:scale-105 bg-blue-600 text-white rounded-full my-3'>Add your answer</button>
                        </div>

                        {/* comments  */}

                        <p className='py-3'>Comments:  </p>
                        <div className='flex flex-col gap-2 max-h-40 overflow-y-auto'>
                            {question.comments.length > 0 ? question.comments.map(item => {
                                return <Comments
                                    key={item._id}
                                    title={item.comment}
                                    user={item.userId.firstname + " " + item.userId.lastname}
                                    createdAt={item.createdAt}
                                    updatedAt={item.updatedAt}
                                />
                            }) : <p className='text-xs text-gray-400' >No comments yet</p>}
                        </div>

                        {/* add a comment  */}
                        <div className='py-4 '>
                            <input value={comment} onChange={(e) => setComment(e.target.value)} className=' rounded-full text-xs p-2 border' placeholder='Add a comment...' />
                            <button onClick={postComment} className=' px-3 py-1 text-xs hover:scale-105 bg-blue-600 text-white rounded-full ml-3'>Add</button>
                        </div>
                        {/* appreciation  */}
                        <div className=' bg-slate-600 rounded-lg p-3 text-sm'>
                            <p className=' text-white'>Your contribution to Snipcode.io is of great enrichment to our community. Your expertise and generosity in sharing insights,
                                showcase your commitment to helping fellow developers. Your contributions make Snipcode.io an invaluable resource,
                                and we're truly grateful. Looking forward to more of your insights. Meanwhile you can browse other questions and help the fellow developers.</p>
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