import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router"

export const HobmeetLogo = ()=>{
    const {isDark} = use(AuthContext)
    return(
        <Link to="/">
          <div className="flex items-center">
            <img className="w-12 mt-1" src="https://i.ibb.co/8n9LRt74/Chat-GPT-Image-May-24-2025-11-58-34-AM-removebg-preview.png" alt="" />
            <a className={`font-medium md:text-2xl text-lg hidden md:block ${isDark ? "text-white" : ""}`}>Hob<span className="text-amber-400">Meet</span></a>
          </div>
        </Link>
    )
}