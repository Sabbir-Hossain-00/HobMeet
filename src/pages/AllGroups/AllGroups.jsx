import { Link, useLoaderData } from "react-router";

export const AllGroups = ()=>{
  const groupData = useLoaderData();
  console.log(groupData)
    return(
        <>
          <div className=" text-center mt-20 space-x-2">
            {
              groupData.map((singleGroupData)=>{
                return <Link to={`/group/${singleGroupData._id}`} className="btn">{singleGroupData.groupName}</Link>
              })
            }
          </div>
        </>
    )
}