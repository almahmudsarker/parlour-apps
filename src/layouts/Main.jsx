import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/Footer/Footer"

const Main = () => {
  return (
  <>
    <Navbar />
      <div className="pt-24 min-h-[calc(100vh-188.250px)]">
        <Outlet />
      </div>
    <Footer />
  </>
  )
}

export default Main
