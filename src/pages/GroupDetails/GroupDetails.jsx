import { useLoaderData } from "react-router";
import swal from 'sweetalert';

export const GroupDetails = () => {
  const groupDetails = useLoaderData();

  const handleJoinGroup = () => {
    const today = new Date(); 
    const groupDate = new Date(groupDetails.date); 

    if (groupDate >= today) {
      swal("Success!", "You joined the group successfully!", "success");
    } else {
      swal("Error!", "The group is no longer active.", "error");
    }
  };

  return (
    <section className="min-h-screen  py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
      <div className="mt-20 py-20 p-10 flex flex-col md:flex-row gap-6 items-start justify-start  bg-gradient-to-b from-amber-50 to-slate-50 border border-slate-100 rounded-xl shadow-md">
        {/* Image */}
        <figure className="w-full md:w-1/2">
          <img
            src={groupDetails.photo}
            alt="Group"
            className="rounded-xl w-full h-[300px] object-cover"
          />
        </figure>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-2 text-black">
          <h2 className="text-2xl font-bold text-gray-800">{groupDetails.groupName}</h2>
          <p><span className="font-semibold">Category:</span> {groupDetails.hobbyCategory}</p>
          <p><span className="font-semibold">Author:</span> {groupDetails.userName}</p>
          <p><span className="font-semibold">Location:</span> {groupDetails.location}</p>
          <p><span className="font-semibold">Last Date:</span> {groupDetails.date}</p>
          <p><span className="font-semibold">Max Members:</span> {groupDetails.members}</p>
          <p><span className="font-semibold">Group Description:</span> {groupDetails.description}</p>
          <div className="pt-3">
            <button
              onClick={handleJoinGroup}
              className="bg-amber-400 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded btn"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
