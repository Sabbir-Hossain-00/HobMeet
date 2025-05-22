import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { NavLink } from "react-router"
import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react"

export const Footer = ()=>{
  const {isDark , user} = use(AuthContext)
    return(
        <section className={`py-20 ${isDark ? "bg-black":"bg-white"}`}>
            <footer className={`flex flex-col justify-center items-center gap-3 ${isDark ? "text-white" : "text-black"}`}>
              <nav>
                <h1 className=" text-2xl font-medium ">HobMeet</h1>
              </nav>
              <ul className=" flex md:flex-row flex-col justify-center items-center gap-5 text-gray-300">
                  <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>Home</NavLink></li>
                 <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/allGroups" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>All Groups</NavLink></li>
                 <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/createGroups" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>Create Groups</NavLink></li>
                 {user && <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/myGroups" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>My Groups</NavLink></li>}
              </ul>
              <div>
                <p className=" text-sm">© 2025 HobMeet. All rights reserved.</p>
              </div>
              <div>
                <div className="grid grid-flow-col gap-4">
                  <a target="blank" href="https://www.facebook.com/jrsabbir00">
                   <FacebookIcon className={` hover:text-rose-700 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
                  </a>
                  <a target="blank" href="https://www.instagram.com/dhali_sabbir_hossain/">
                     <Instagram className={` hover:text-rose-700 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
                  </a>
                  <a target="blank" href="https://x.com/ms7398037">
                    <Twitter className={` hover:text-rose-700 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
                  </a>
                  <a target="blank" href="https://github.com/Sabbir-Hossain-00">
                    <Github className={` hover:text-rose-700 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
                  </a>
                </div>
              </div>
            </footer>
        </section>
    )
}