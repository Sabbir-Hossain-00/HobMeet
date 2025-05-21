import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const CreateGroups = () => {
  const { user } = use(AuthContext);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-blue-300 p-4">
      <form
        onSubmit={handleCreateGroup}
        className="bg-white/10 backdrop-blur-lg border border-white/50 p-8 rounded-xl w-full max-w-xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create a Group
        </h2>

        <label className="block mb-2 font-medium text-gray-700">
          Group Name:<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="groupName"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Hobby Category:<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full p-2 mb-4 border rounded"
          name="hobbyCategory"
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

        <div className="flex gap-2 mb-4">
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              User Name:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Name"
              value={user.displayName}
              readOnly
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              User Email:<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              readOnly
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              Meeting Location:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              Max Members:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="members"
              placeholder="Members"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <label className="block mb-2 font-medium text-gray-700">
          Start Date:<span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Image URL:<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="photo"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Description:<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="description"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
