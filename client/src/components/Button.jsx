import React from 'react'

function Button(props) {
    return (
        <div onClick={props.onClick} className='px-4 py-2 text-white bg-orange-600 inline-block rounded-full cursor-pointer hover:scale-105'>{props.text}</div>
    )
}

export default Button 