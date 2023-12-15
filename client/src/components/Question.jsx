import React from 'react'
import Tags from './Tags'
import { FaEye, FaRegCommentAlt } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
function Question(props) {

    const htmlToText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };
    return (
        <div onClick={() => props.handleId(props.id)} className=' shadow-md p-4 cursor-pointer' >
            <div className='flex flex-col '>
                <h1 className=' text-2xl'>{props.title}</h1>
                <div className='py-3'>{htmlToText(props.body).slice(0, 200)}...</div>
            </div>
            <div className='py-2 flex gap-x-3'>
                {props.tags.map(item => <Tags text={item} />)}
            </div>
            <div className='flex gap-x-4 py-4 text-gray-400'>
                <div className='flex items-center gap-x-2 text-orange-600'>
                    <FiTriangle />
                    <p>{props.votes}</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <FaRegCommentAlt />
                    <p>{props.comments}</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <FaEye />
                    <p>{props.views}</p>
                </div>

            </div>
        </div>
    )
}

Question.defaultProps = {
    views: 0,
    votes: 0,
    comments: 0
}

export default Question