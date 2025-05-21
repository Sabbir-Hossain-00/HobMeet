import { Outlet, useNavigation } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { Loader } from "../pages/Loader/Loader";

export const MainLayout = ()=>{
   
   const navigation = useNavigation();
   if(navigation.state === "loading"){
      return <Loader/>
   }
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