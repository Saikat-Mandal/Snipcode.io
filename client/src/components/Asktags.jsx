import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
function Asktags(props) {
    return (
        <div onClick={() => props.onClick(props.id)} className='px-3 text-gray-500 text-xs py-1 border border-gray-400  gap-x-2 rounded-full cursor-pointer flex items-center '>{props.text} <span> <IoIosCloseCircleOutline /> </span> </div>
    )
}

export default Asktags