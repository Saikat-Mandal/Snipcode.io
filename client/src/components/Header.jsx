import React from 'react'
import { FaRegMessage, FaTrophy } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className=' p-6  flex items-center w-full'>
            <Link to="/home" className='w-1/3 text-sm flex items-center gap-x-1'> <span className='text-2xl'><PiArrowsInCardinalBold /></span>Snipcode.io</Link>
            <div className='w-1/3 px--4 py-2 rounded-full border flex items-center gap-x-3' >
                <IoSearchSharp className='ml-4 text-orange-600' />
                <input type="text" placeholder='search ' className='w-full outline-none' />
            </div>
            <div className=' flex justify-end gap-x-6 items-center w-1/3'>
                <FaRegMessage />
                <FaTrophy />
                <Link to="/dashboard" className='h-10 w-10 border-2 border-gray-400 rounded-full'>
                    <img className='h-full w-full' src="" alt="dp" />
                </Link>
            </div>
        </header>
    )
}

export default Header