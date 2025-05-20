import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router"


export const MyGroups = ()=>{
  const initialgroupData = useLoaderData();
  const [groupData , setGroupData] = useState(initialgroupData)
  const navigate = useNavigate();




  const handleDeleteGroup = (id)=>{
    fetch(`http://localhost:3000/group/${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then((data)=>{
      if(data.deletedCount){
        const remainingGroup = groupData.filter((group)=> group._id !== id)
        setGroupData(remainingGroup)
      }
    })
  }


    return(
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Group Name</th>
                  <th>Category</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  groupData.map((signleData)=>{
                    return <tr key={signleData._id}>
                              <td>
                                <div className="flex items-center gap-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                      <img
                                        src={signleData.photo}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold">{signleData.userName}</div>
                                    <div className="text-sm opacity-50">{signleData.location}</div>
                                  </div>
                                </div>
                              </td>
                              <td>{signleData.groupName}</td>
                              <td>{signleData.hobbyCategory}</td>
                              <td>
                                <button onClick={()=>navigate(`/updategroup/${signleData._id}`)} className="btn">Update</button>
                              </td>
                              <td>
                                <button onClick={()=>handleDeleteGroup(signleData._id)} className="btn">Delete</button>
                              </td>
                            </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </>
    )
}