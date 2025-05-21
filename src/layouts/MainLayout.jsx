import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export const MainLayout = ()=>{
    return(
        <>
           <header>
              <Navbar/>
           </header>
           <main className="">
              <Outlet/>
           </main>
           <Footer>
              <Footer/>
           </Footer>
        </>
    )
}