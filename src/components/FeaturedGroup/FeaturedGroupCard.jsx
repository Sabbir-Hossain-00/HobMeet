import { use } from "react"
import { Zoom } from "react-awesome-reveal"
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const FeaturedGroupCard = ({group})=>{
  const {isDark} = use(AuthContext)
    return(
        <>
        <Zoom>
          <div className={`card bg-base-100 shadow-sm ${isDark?"text-black" : ""}`}>
             <figure className="h-[150px] xl:h-[250px]">
               <img
                 src={group.photo}
                 alt="Shoes" 
                 className="w-full"/>
             </figure>
             <div className="card-body">
               <h2 className="card-title">{group.groupName}</h2>
               <p >{group.description}</p>
               <p>{group.date}</p>
               <div className="card-actions ">
                 <Link to={`/group/${group._id}`} className="btn w-full border-none  bg-amber-300 hover:bg-amber-400  ">Details</Link>
               </div>
             </div>
         </div>
        </Zoom>
          
        </>
    )
}