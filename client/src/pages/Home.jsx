import React from 'react'
import Layout from '../containers/Layout'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Maincontent from '../components/Maincontent'
import { useSelector } from 'react-redux'

function Home({ children }) {
    const darkMode = useSelector(state => state.darkMode)
    const backgroundColor = darkMode && " bg-zinc-900"
    const textColor = darkMode && " text-white"
    return (
        <Layout>
            <div className={backgroundColor + textColor + ' w-full h-screen flex '}>
                <Leftbar />
                {children ? children : <Maincontent />}
                <Rightbar />
            </div>
        </Layout>
    )
}

export default Home