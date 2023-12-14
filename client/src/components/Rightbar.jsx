import React from 'react'
import RightbarContent from './RightbarContent'
import { LuPencil } from "react-icons/lu";
function Rightbar() {
    return (
        <div className='w-1/5  bg-gradient-to-t from-gray-200 to-white'>
            <RightbarContent title="The Overflow Blog " >
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'><span><LuPencil /></span> Three types of AI-assisted programmers </p>
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'><span><LuPencil /></span>  What Gemini means for the GenAI boom  </p>
            </RightbarContent>
            <RightbarContent title="Featured on Meta " >
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'> <span><LuPencil /></span> Three types of AI-assisted programmers </p>
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'> <span><LuPencil /></span>  What Gemini means for the GenAI boom  </p>
            </RightbarContent>
            <RightbarContent title="Hot Meta Posts " >
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'> <span><LuPencil /></span> Drivers are the best things ever produced </p>
                <p className='py-1 text-gray-500 text-xs flex items-center gap-x-2'> <span><LuPencil /></span>   this is what we wanted </p>
            </RightbarContent>
        </div>
    )
}

export default Rightbar