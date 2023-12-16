import React from 'react'
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
function Answer(props) {
    return (
        <div className=' border-2 border-orange-600 p-6 rounded-lg '>
            <div className='flex justify-between'>
                <div className='w-2/3 '>
                    <p className='text-sm py-2'>{props.body}</p>
                    <div className='flex items-center gap-x-2'>
                        <p className=' text-xs' ><span className='font-bold' >Asked:</span> {props.createdAt}</p>
                        <p className=' text-xs' ><span className='font-bold' >Updated:</span> {props.updatedAt}</p>
                        <p className=' text-xs' ><span className='font-bold' >Views:</span> 0</p>
                    </div>
                </div>
                <div className=' flex flex-col justify-between w-1/3'>
                    <div className='flex items-center text-2xl justify-end'>
                        <div className='flex items-center gap-x-4 text-gray-600'>
                            <span onClick={() => props.updateVote(props.id)} className=' cursor-pointer hover:scale-110'><IoMdThumbsUp /></span>
                            <p>{props.upvotes + props.downvotes}</p>
                            <span onClick={() => props.downVote(props.id)} className=' cursor-pointer hover:scale-110'> <IoMdThumbsDown /></span>
                            <span onClick={() => props.isAnswerCorrect(props.id)} className={`${props.correct && " text-green-500"} cursor-pointer`}><ImCheckmark /> </span>
                        </div>

                    </div>
                    <div>
                        <p className='text-xs text-gray-500 text-right'>By- {props.user}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Answer