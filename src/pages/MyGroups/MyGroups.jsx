import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";


export const MyGroups = ()=>{
  const {user} = use(AuthContext)
  const [groupData , setGroupData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async()=>{
    const res = await fetch(`http://localhost:3000/mygroups/${user.email}`);
    const data = await res.json();
    setGroupData(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

 

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
        <section className=" container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
          <div className="py-20">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border border-gray-100 text-center">
                  <th className="border border-gray-100">Name</th>
                  <th className="border border-gray-100">Group Name</th>
                  <th className="border border-gray-100">Category</th>
                  <th className="border border-gray-100">Update</th>
                  <th className="border border-gray-100">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  groupData?.map((signleData)=>{
                    return <tr className="border border-gray-100 text-center" key={signleData._id}>
                              <td className="border border-gray-100">
                                <div className="flex items-center justify-center gap-3">
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
                              <td className="border border-gray-100">{signleData.groupName}</td>
                              <td className="border border-gray-100">{signleData.hobbyCategory}</td>
                              <td className="border border-gray-100">
                                <button onClick={()=>navigate(`/updategroup/${signleData._id}`)} className="btn">Update</button>
                              </td>
                              <td className="border border-gray-100">
                                <button onClick={()=>handleDeleteGroup(signleData._id)} className="btn">Delete</button>
                              </td>
                            </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </section>
    )
}