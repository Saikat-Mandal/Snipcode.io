import React from 'react'

function RightbarContent({ title, children }) {
    return (
        <div className='w-full p-5'>
            <h1 className='text-xl font-extrabold'>{title}</h1>
            {children}
        </div>
    )
}

export default RightbarContent