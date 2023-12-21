import React, { useEffect } from 'react'
import { FaRegMessage, FaTrophy } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { IoMdMoon } from "react-icons/io";
import { turnOnDarkMode } from "../feature/todo/userSlice"

function Header() {
    // const token = useSelector(state => state.token)
    // const isAuthenticated = useSelector(state => state.isAuthenticated)
    const darkMode = useSelector(state => state.darkMode)

    const dispatch = useDispatch()
    const changeDarkMode = () => {
        dispatch(turnOnDarkMode())
    }


    const backgroundColor = darkMode && " bg-zinc-900"
    const textColor = darkMode && " text-white"
    const dp = useSelector(state => state.dp)

    return (
        <header className={backgroundColor + textColor + ' p-6  flex items-center w-full transition duration-4000 ease-in '}>
            <Link to="/home" className=' w-1/3 text-sm flex items-center gap-x-1'> <span className='text-2xl'><PiArrowsInCardinalBold /></span>Snipcode.io</Link>
            <div className='w-1/3 px--4 py-2 rounded-full border flex items-center gap-x-3' >
                <IoSearchSharp className='ml-4 text-orange-600' />
                <input type="text" placeholder='search ' className='w-full outline-none bg-transparent ' />
            </div>
            <div className=' flex justify-end gap-x-6 items-center w-1/3 '>
                <span onClick={changeDarkMode} className='cursor-pointer'>
                    {darkMode ? <IoMdMoon /> : <IoSunny />}
                </span>
                <FaRegMessage />
                <FaTrophy />
                <Link to="/dashboard" className='h-10 w-10 border-2 border-gray-400 rounded-full'>
                    <img className='h-full w-full' src={dp} alt="dp" />
                </Link>
            </div>
        </header>
    )
}

export default Header