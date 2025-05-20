import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"

export const MainLayout = ()=>{
    return(
        <>
           <header>
              <Navbar/>
           </header>
           <main>
              <Outlet/>
           </main>
        </>
    )
}