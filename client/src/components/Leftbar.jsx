import React from 'react'
import { RiHomeLine } from "react-icons/ri";
import Tabs from './Tabs';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TbTagStarred } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
function Leftbar() {
    return (
        <div className='w-1/5'>
            <Tabs icon={<RiHomeLine />} title="Home" path="/home" />
            <Tabs icon={<BsFillQuestionCircleFill />} title="Questions" path="/questions" />
            <Tabs icon={<TbTagStarred />} title="Tags" path="/tags" />
            <Tabs icon={<HiUsers />} title="Users" path="/users" />
        </div>
    )
}

export default Leftbar