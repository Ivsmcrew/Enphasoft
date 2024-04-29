import { Outlet } from "react-router-dom";

const Layout = function() {
  return(
    <>
      <IvsmNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout