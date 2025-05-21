import { Outlet, useNavigation } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { Loader } from "../pages/Loader/Loader";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export const MainLayout = ()=>{
   const {isDark} = use(AuthContext)
   const navigation = useNavigation();
   if(navigation.state === "loading"){
      return <Loader/>
   }
    return(
        <>
           <header>
              <Navbar/>
           </header>
           <main className={`${isDark ? "bg-gray-50 text-black":"bg-gray-900 text-white"}`}>
              <Outlet/>
           </main>
           <Footer>
              <Footer/>
           </Footer>
        </>
    )
}