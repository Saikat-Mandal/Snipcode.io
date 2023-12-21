
import { useSelector } from 'react-redux'
import Header from '../components/Header'

function Layout({ children }) {
    const darkMode = useSelector(state => state.darkMode)
    const backgroundColor = darkMode && " bg-zinc-950"
    const textColor = darkMode && " text-white"
    return (
        <div className={backgroundColor + textColor + " transition duration-4000 ease-in-out"}>
            <Header />
            {children}
        </div>
    )
}

export default Layout