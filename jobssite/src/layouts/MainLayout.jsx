import { Outlet  } from "react-router-dom"
import Navbar from "../assets/components/Navbar"
function MainLayout(){

    return (
        <>
        <Navbar />
        <Outlet />
        </>

    )

}
export default MainLayout