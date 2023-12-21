import React from 'react'
import { Link } from 'react-router-dom'

function Profiletabs(props) {
    return (
        <Link to={props.path} className={props.hoverColor + ' py-1 rounded-full hover:bg-slate-200 px-2 cursor-pointer'} >{props.title}</Link>
    )
}

export default Profiletabs