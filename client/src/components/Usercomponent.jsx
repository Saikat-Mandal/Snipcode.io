import React from 'react'

function Usercomponent(props) {
    return (
        <div className=' w-full  lg:w-1/4 h-20 flex flex-1 bg-white text-slate-600 rounded-sm justify-between px-2 py-1 items-center'>
            <div className='h-10 w-10 rounded-full border-2'></div>
            <div className='flex flex-col text-xs'>
                <p>{props.name}</p>
                <p>{props.joined}</p>
            </div>
        </div>
    )
}

export default Usercomponent