import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";


export const MyGroups = ()=>{
  const {user , isDark} = use(AuthContext)
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
        <section className="py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
          <h1 className="text-center text-2xl md:text-4xl mb-2 font-medium">Your Hobby Hub</h1>
          <p className="text-center mb-10 ">Manage all the hobby groups you've created in one place. Update details, remove groups, <br /> or explore your communities—right from your dashboard.</p>
          <div className=" overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className={`border border-gray-200 text-center ${isDark ? "text-white" :"text-gray-700"}`}>
                  <th className="border border-gray-200">Name</th>
                  <th className="border border-gray-200">Group Name</th>
                  <th className="border border-gray-200">Category</th>
                  <th className="border border-gray-200">Update</th>
                  <th className="border border-gray-200">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  groupData?.map((signleData)=>{
                    return <tr className="border border-gray-200 text-center" key={signleData._id}>
                              <td className="border border-gray-200">
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
                              <td className="border border-gray-200">{signleData.groupName}</td>
                              <td className="border border-gray-200">{signleData.hobbyCategory}</td>
                              <td className="border border-gray-200">
                                <button onClick={()=>navigate(`/updategroup/${signleData._id}`)} className="btn border-none  bg-amber-300 hover:bg-amber-400  ">Update</button>
                              </td>
                              <td className="border border-gray-200">
                                <button onClick={()=>handleDeleteGroup(signleData._id)} className="btn border-none bg-rose-500 hover:bg-rose-600 text-white
">Delete</button>
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