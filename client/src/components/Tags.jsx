import React from 'react'

function Tags(props) {
    return (
        <div className='px-4 text-gray-500 text-xs py-1 border border-gray-400 inline-block rounded-full cursor-pointer '>{props.text}</div>
    )
}

export default Tags