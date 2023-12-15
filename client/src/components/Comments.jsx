import React from 'react'

function Comments(props) {
    return (
        <div className=' border-2 p-2 rounded-md text-sm'>
            <p>{props.title}</p>
            <p className=' text-xs text-gray-400' >Posted by: {props.user}</p>
            <p className=' text-xs text-gray-400' >Posted on: {props.createdAt}</p>
            <p className=' text-xs text-gray-400' >Posted on: {props.updatedAt}</p>
        </div>
    )
}

export default Comments