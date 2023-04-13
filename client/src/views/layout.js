import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { Outlet } from "react-router-dom"

const Layout = ({handleSubmit}) => {
    return (
        <>
            <Navbar handleSubmit = {handleSubmit}/>
            <Outlet />
            <Footer />
        </>
        
    )
}

export default Layout