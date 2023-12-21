import React from 'react'
import { RiHomeLine } from "react-icons/ri";
import Tabs from './Tabs';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TbTagStarred } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { useSelector } from 'react-redux';
function Leftbar() {

    const darkMode = useSelector(state => state.darkMode)
    const backgroundColor = darkMode && " bg-zinc-900"
    const textColor = darkMode && " text-white"
    return (
        <div className={backgroundColor + textColor + ' w-1/5 transition duration-4000 ease-in'}>
            <Tabs icon={<RiHomeLine />} title="Home" path="/home" />
            <Tabs icon={<BsFillQuestionCircleFill />} title="Questions" path="/questions" />
            <Tabs icon={<TbTagStarred />} title="Tags" path="/tags" />
            <Tabs icon={<HiUsers />} title="Users" path="/users" />
        </div>
    )
}

export default Leftbar