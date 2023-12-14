import React from 'react'

function MinibarTabs(props) {
    return (
        <button className='px-4 text-white text-xs py-1 bg-orange-600 inline-block rounded-full cursor-pointer hover:scale-105'>{props.text}</button>
    )
}

export default MinibarTabs