import { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import swal from 'sweetalert';
import { AuthContext } from "../../context/AuthContext";
import { CircleAlert } from "lucide-react";

export const GroupDetails = () => {
  const groupDetails = useLoaderData();
  const {isDark} = use(AuthContext);
  const [isLonger , setIsLonger] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const today = new Date(); 
    const groupDate = new Date(groupDetails.date);
    if (groupDate <= today) {
        setIsLonger(false)
    }
  },[]);

  const handleJoinGroup = () => {
     swal("Success!", "You joined the group successfully!", "success");
  };

  useEffect(() => {
    document.title = "Group Details - HobMeet";
    return () => {
      document.title = "HobMeet"; // reset on unmount
    };
  }, []);

  return (
    <section className="mt-20 min-h-screen  py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">

      <button onClick={()=>navigate("/")} className="btn btn-sm bg-amber-300 border-none hover:bg-amber-400">Go Back To Home</button>

      <div className={`mt-20 md:py-20 md:p-10 p-4 flex flex-col md:flex-row gap-6 items-start justify-start  rounded-xl shadow-md ${isDark ? "bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700":"bg-gradient-to-b from-amber-50 to-slate-50 border border-slate-100"}`}>
        {/* Image */}
        <figure className="w-full md:w-1/2">
          <img
            src={groupDetails.photo}
            alt="Group"
            className="rounded-xl w-full xl:h-[320px] md:h-[350px] h-[200px] object-cover"
          />
        </figure>

        {/* Content */}
        <div className={`w-full md:w-1/2 space-y-2  ${isDark ? "text-white":"text-black"}`}>
          <h2 className={`text-2xl font-bold  ${isDark ? "text-white":"text-gray-800"}`}>{groupDetails.groupName}</h2>
          <p><span className="font-semibold">Category:</span> {groupDetails.hobbyCategory}</p>
          <p><span className="font-semibold">Author:</span> {groupDetails.userName}</p>
          <p><span className="font-semibold"> Meeting Location:</span> {groupDetails.location}</p>
          <p><span className="font-semibold">Last Date:</span> {groupDetails.date}</p>
          <p><span className="font-semibold">Max Members:</span> {groupDetails.members}</p>
          <p><span className="font-semibold">Group Description:</span> {groupDetails.description}</p>
          <div className="pt-3">
            {
              isLonger ? <button
              onClick={handleJoinGroup}
              className="bg-amber-300 border-none hover:bg-amber-400 text-white font-medium px-4 py-2 rounded btn"
            >
              Join Now
            </button> : <p className="bg-red-100  px-4 py-2 rounded-4xl md:w-fit flex gap-2 items-center text-red-700"><CircleAlert size={16} /> The group is no longer active</p>
            }
          </div>
        </div>
      </div>
    </section>
  );
};
