import { use } from "react"
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const GroupCard = ({singleGroupData})=>{
  const {isDark} = use(AuthContext)
    return(
        <>
            
               <div className="relative  p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 group">
                 <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition duration-300" />
                 
                 <div className="flex flex-col items-center text-center">
                   <img
                     src={singleGroupData.photo}
                     alt="Avatar"
                     className="w-20 h-20 rounded-full border-4 border-white/30 shadow-md"
                   />
                   <h2 className={`mt-4 text-2xl font-semibold ${isDark ? "text-white":"text-black"}`}>{singleGroupData.groupName}</h2>
                   <p className={`text-sm  ${isDark ? "text-white/70" :"text-black"}`}>{singleGroupData.hobbyCategory}</p>
         
                   <p className={`mt-4 text-base  ${isDark? "text-white/80":"text-black"}`}>
                     {singleGroupData.description}
                   </p>
                 </div>
         
                 <div className="mt-6 flex justify-center gap-4">
                   <Link to={`/group/${singleGroupData._id}`} className="btn border-none w-full  bg-amber-300 hover:bg-amber-400"> See More</Link>
                 </div>
               </div>

        </>
    )
}

