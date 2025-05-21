import { Bounce, Fade, Flip, Hinge, JackInTheBox, Rotate, Slide, Zoom } from "react-awesome-reveal"
import { Link } from "react-router"

export const FeaturedGroupCard = ({group})=>{
    return(
        <>
        <Zoom>
          <div className="card bg-base-100 shadow-sm">
             <figure className="h-[150px] xl:h-[250px]">
               <img
                 src={group.photo}
                 alt="Shoes" 
                 className="w-full"/>
             </figure>
             <div className="card-body">
               <h2 className="card-title">{group.groupName}</h2>
               <p className="">A card component has a figure, a body part, and inside body there are title and actions parts</p>
               <div className="card-actions ">
                 <Link to={`/group/${group._id}`} className="btn btn-primary">Details</Link>
               </div>
             </div>
         </div>
        </Zoom>
          
        </>
    )
}