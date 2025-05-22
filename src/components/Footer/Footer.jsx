import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { NavLink } from "react-router"
import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react"

export const Footer = ()=>{
  const {isDark , user} = use(AuthContext)
    return(
        <section className=" bg-neutral py-20">
            <footer className="flex flex-col justify-center items-center gap-3">
              <nav>
                <h1 className=" text-2xl font-medium text-white">HobMeet</h1>
              </nav>
              <ul className=" flex md:flex-row flex-col justify-center items-center gap-5 text-gray-300">
                  <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink></li>
                 <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/allGroups" className={({ isActive }) => isActive ? "underline" : ""}>All Groups</NavLink></li>
                 <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/createGroups" className={({ isActive }) => isActive ? "underline" : ""}>Create Groups</NavLink></li>
                 {user && <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/myGroups" className={({ isActive }) => isActive ? "underline" : ""}>My Groups</NavLink></li>}
              </ul>
              <div>
                <p className="text-white text-sm">© 2025 HobMeet. All rights reserved.</p>
              </div>
              <div>
                <div className="grid grid-flow-col gap-4">
                  <a target="blank" href="https://www.facebook.com/jrsabbir00">
                   <FacebookIcon className="text-white hover:text-rose-700 transition duration-500 text-2xl cursor-pointer"/>
                  </a>
                  <a target="blank" href="https://www.instagram.com/dhali_sabbir_hossain/">
                     <Instagram className="text-white hover:text-rose-700 transition duration-500 text-2xl cursor-pointer"/>
                  </a>
                  <a target="blank" href="https://x.com/ms7398037">
                    <Twitter className="text-white hover:text-rose-700 transition duration-500 text-2xl cursor-pointer"/>
                  </a>
                  <a target="blank" href="https://github.com/Sabbir-Hossain-00">
                    <Github className="text-white hover:text-rose-700 transition duration-500 text-2xl cursor-pointer"/>
                  </a>
                </div>
              </div>
            </footer>
        </section>
    )
}