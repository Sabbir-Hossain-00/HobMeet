import { use } from "react"
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const GroupCard = ({singleGroupData})=>{
  const {isDark} = use(AuthContext)
    return(
        <>
        <Link to={`/group/${singleGroupData._id}`}>
               <div className=" rounded-lg overflow-hidden relative">
              <img
                src={singleGroupData.photo} 
                alt="Repair Cafe"
                className="w-full h-40 xl:h-60 object-cover"
              />
              <div className="absolute top-2 left-2 text-white">
                <h2 className="text-lg font-semibold">{singleGroupData.groupName}</h2>
                <p className="text-sm">{singleGroupData.members} Members</p>
              </div>
              <div className={`p-3 text-start text-sm ${isDark? "text-gray-300" : "text-gray-700"}`}>
                <p>Joining last date is {singleGroupData.date} </p>
              </div>
            </div>
        </Link>
        </>
    )
}

