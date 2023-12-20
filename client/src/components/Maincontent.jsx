import React, { useEffect, useState } from 'react'
import Button from './Button'
import MinibarTabs from './MinibarTabs'
import Question from './Question'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Maincontent() {

    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getAllQuestions = async () => {
            try {
                const res = await axios.get("http://localhost:4000/question/allquestions")
                setQuestions(res.data)

            } catch (error) {
                alert(error)
            }
        }
        getAllQuestions()

    }, [])


    // get to particular question page 
    const particularQuestion = (id) => {
        navigate(`/question/${id}`, { state: { key: id } })
    }

    const darkMode = useSelector(state => state.darkMode)
    const backgroundColor = darkMode && " bg-zinc-950"
    const textColor = darkMode && " text-white"

    return (
        <div className={backgroundColor + textColor + ' w-3/5 h-screen overflow-auto rounded-xl p-4'}>
            <h1 className='px-4 text-3xl text-gray-600 pb-4'> Top Questions </h1>

            <div className='px-4 flex items-center justify-between '>
                <div className=' flex gap-x-4'>
                    <MinibarTabs text="Interesting" />
                    <MinibarTabs text="Bounted" />
                    <MinibarTabs text="Hot" />
                    <MinibarTabs text="Week" />
                </div>
                <Link to="/ask" className='px-4 py-1 text-xs hover:scale-105 bg-blue-600 text-white rounded-full'>ASK QUESTION</Link>
            </div>
            {/* questions  */}
            <div className=' py-6 overflow-y-auto'>
                {
                    questions.map((item) => {
                        return <Question
                            key={item._id}
                            id={item._id}
                            title={item.title}
                            body={item.body}
                            votes={item.upvotes + item.downvotes}
                            comments={item.comments.length}
                            tags={item.tags}
                            handleId={particularQuestion}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default Maincontent