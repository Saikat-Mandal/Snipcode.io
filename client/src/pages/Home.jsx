import React from 'react'
import Layout from '../containers/Layout'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Maincontent from '../components/Maincontent'

function Home({ children }) {
    return (
        <Layout>
            <div className=' w-full h-screen flex'>
                <Leftbar />
                {children ? children : <Maincontent />}
                <Rightbar />
            </div>
        </Layout>
    )
}

export default Home