import React from 'react'
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

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
                <div className='flex items-center gap-x-4 text-2xl'>
                    <span onClick={props.updateVote} className=' cursor-pointer hover:scale-110'><IoMdThumbsUp /></span>
                    <p>{props.upvotes - props.downvotes}</p>
                    <span onClick={props.downvote} className=' cursor-pointer hover:scale-110'> <IoMdThumbsDown /></span>
                </div>
            </div>
        </div>
    )
}

export default Answer