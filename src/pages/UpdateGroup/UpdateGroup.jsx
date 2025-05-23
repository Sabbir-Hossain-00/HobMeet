import { useLoaderData, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UpdateGroup = () => {
  const groupData = useLoaderData();
  const { isDark } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateGroup = Object.fromEntries(formData.entries());

    fetch(`https://hobmeet-server.vercel.app/group/${groupData._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          swal({
            title: "Group Updated Successfully",
            icon: "success",
            button: "Ok",
          });
          navigate("/myGroups")
        }
      });
  };

  return (
    <section
      className={
        isDark
          ? "bg-gradient-to-br via-blue-950 from-gray-900 to-black text-gray-200"
          : "bg-gradient-to-br from-purple-200 via-blue-100 to-blue-200"
      }
    >
      <div className="mt-22 min-h-screen container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 p-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm bg-amber-400 border-none hover:bg-amber-500"
        >
          Go Back
        </button>
        <form
          onSubmit={handleUpdateGroup}
          className={`p-5 mx-auto my-10 md:p-8 rounded-xl w-full max-w-xl shadow-xl backdrop-blur-md ${
            isDark
              ? "bg-black/20 border border-white/10"
              : "bg-white/10 border border-black/10"
          }`}
        >
          <h2
            className={`text-2xl font-bold text-center mb-6 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Update Your Group
          </h2>

          {/* Group Name */}
          <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
            Group Name:<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="groupName"
            defaultValue={groupData.groupName}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          {/* Hobby Category */}
          <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
            Hobby Category:<span className="text-red-500">*</span>
          </label>
          <select
            className="w-full p-2 mb-4 border rounded"
            name="hobbyCategory"
            defaultValue={groupData.hobbyCategory}
            required
          >
            <option value="Drawing & Painting">Drawing & Painting</option>
            <option value="Photography">Photography</option>
            <option value="Video Gaming">Video Gaming</option>
            <option value="Fishing">Fishing</option>
            <option value="Running">Running</option>
            <option value="Cooking">Cooking</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
          </select>

          {/* User Info */}
          <div className="flex md:flex-row flex-col gap-2 mb-4">
            <div className="w-full">
              <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
                User Name:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="userName"
                value={groupData.userName}
                readOnly
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="w-full">
              <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
                User Email:<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={groupData.email}
                readOnly
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Location and Members */}
          <div className="flex md:flex-row flex-col gap-2 mb-4">
            <div className="w-full">
              <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
                Meeting Location:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={groupData.location}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="w-full">
              <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
                Max Members:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="members"
                defaultValue={groupData.members}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Date */}
          <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
            Start Date:<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            defaultValue={groupData.date}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          {/* Photo URL */}
          <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
            Image URL:<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={groupData.photo}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          {/* Description (textarea) */}
          <label className={`block mb-2 font-medium ${isDark ? "text-white" : "text-gray-700"}`}>
            Description:<span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            defaultValue={groupData.description}
            rows="4"
            className="w-full p-2 mb-4 border rounded"
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full bg-purple-500 text-white font-bold py-2 rounded border-none hover:bg-purple-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};
