import { Outlet } from "react-router-dom";
import Navbar from "../../UI/sections/Navbar/Navbar"
import Footer from "../../UI/sections/Footer/Footer"

const Layout = function() {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout