import { use } from "react"
import { Zoom } from "react-awesome-reveal"
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const FeaturedGroupCard = ({group})=>{
  const {isDark} = use(AuthContext)
    return(
        <div>
        <Zoom>
          <div className={`card h-[500px] xl:h-[520px]  shadow-sm ${isDark? "text-white bg-black" :"text-black bg-base-100" }`}>
             <figure className="h-[200px] xl:h-[250px]">
               <img
                 src={group.photo}
                 alt="Shoes" 
                 className="w-full"/>
             </figure>
             <div className="card-body ">
               <h2 className="card-title text-2xl lg:text-2xl">{group.groupName}</h2>
               <p className="mt-2"><strong>Category :</strong> {group.hobbyCategory}</p>
               <p><strong>Meeting Location :</strong> {group.location}</p>
               <p><strong>Members :</strong> {group.members}</p>
               <p><strong>Last Date :</strong> {group.date}</p>
               <p><strong>Description :</strong> {group.description}</p>
               <div className="card-actions mt-3">
                 <Link to={`/group/${group._id}`} className="btn w-full border-none  bg-amber-300 hover:bg-amber-400  ">Details</Link>
               </div>
             </div>
         </div>
        </Zoom>
          
        </div>
    )
}