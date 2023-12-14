import React from 'react'
import { Link } from 'react-router-dom'

function Tabs(props) {
    return (
        <Link to={props.path} className=' flex items-center px-4 py-2 gap-x-4 cursor-pointer my-2 hover:bg-orange-100
         hover:border-r-8 hover:border-orange-600'>
            <span className=' text-orange-600'>{props.icon}</span>
            <p>{props.title}</p>
        </Link>
    )
}

export default Tabs