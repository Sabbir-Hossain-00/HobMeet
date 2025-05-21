import { Link } from "react-router"

export const GroupCard = ({singleGroupData})=>{
    return(
        <>
        <Link to={`/group/${singleGroupData._id}`}>
               <div className=" rounded-lg overflow-hidden relative">
              <img
                src={singleGroupData.photo} // Replace with your actual image path
                alt="Repair Cafe"
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2 text-white">
                <h2 className="text-lg font-semibold">{singleGroupData.groupName}</h2>
                <p className="text-sm">{singleGroupData.members} Members</p>
              </div>
              <div className="p-3 text-start text-sm text-gray-700">
                <p>Started {singleGroupData.date} in {singleGroupData.location}</p>
              </div>
            </div>
        </Link>
        </>
    )
}

