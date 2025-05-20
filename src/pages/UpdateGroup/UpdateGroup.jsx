import { useLoaderData } from "react-router"

export const UpdateGroup = ()=>{
    const groupData = useLoaderData();
    console.log(groupData)
    
    const handleUpdateGroup = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateGroup = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/group/${groupData._id}`, {
            method: "PUT",
            headers:{
                "Content-type" : "application/json"
            },
            body : JSON.stringify(updateGroup)
        }).then(res => res.json()).then((data)=>{
            console.log(data)
        })
    }
    return(
        <>
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-blue-200 p-4">
                <form onSubmit={handleUpdateGroup} className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-xl w-full max-w-xl shadow-xl">
                  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create a Group</h2>
        
                  <label className="block mb-2 font-medium text-gray-700">Group Name:<span className="text-red-500">*</span></label>
                  <input type="text" name="groupName" defaultValue={groupData.groupName} className="w-full p-2 mb-4 border rounded" required />
        
                  <label className="block mb-2 font-medium text-gray-700">Hobby Category:<span className="text-red-500">*</span></label>
                  <select className="w-full p-2 mb-4 border rounded" name="hobbyCategory" defaultValue={groupData.hobbyCategory} required>
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
                      <label className="block mb-2 font-medium text-gray-700">User Name:<span className="text-red-500">*</span></label>
                      <input type="text" name="userName" placeholder="Name" value={groupData.userName} readOnly className="w-full p-2 border rounded" required />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 font-medium text-gray-700">User Email:<span className="text-red-500">*</span></label>
                      <input type="email" name="email" placeholder="Email" value={groupData.email} readOnly className="w-full p-2 border rounded" required />
                    </div>
                  </div>
        
                  <div className="flex gap-2 mb-4">
                    <div className="w-full">
                      <label className="block mb-2 font-medium text-gray-700">Meeting Location:<span className="text-red-500">*</span></label>
                      <input type="text" name="location" placeholder="Location" defaultValue={groupData.location} className="w-full p-2 border rounded" required />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 font-medium text-gray-700">Max Members:<span className="text-red-500">*</span></label>
                      <input type="text" name="members" placeholder="Members" defaultValue={groupData.members} className="w-full p-2 border rounded" required />
                    </div>
                  </div>
        
                  <label className="block mb-2 font-medium text-gray-700">Start Date:<span className="text-red-500">*</span></label>
                  <input type="date" name="date" defaultValue={groupData.date} className="w-full p-2 mb-4 border rounded" required />
        
                  <label className="block mb-2 font-medium text-gray-700">Image URL:<span className="text-red-500">*</span></label>
                  <input type="text" name="photo" defaultValue={groupData.photo} className="w-full p-2 mb-4 border rounded" required />
        
                  <label className="block mb-2 font-medium text-gray-700">Description:<span className="text-red-500">*</span></label>
                  <input type="text" name="description" defaultValue={groupData.description} className="w-full p-2 mb-4 border rounded" required />
        
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">Verification<span className="text-red-500">*</span></label>
                    <div className="bg-white p-3 rounded shadow-md">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked required />
                        <span>I’m not a robot</span>
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6 ml-auto" />
                      </div>
                    </div>
                  </div>
        
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
                    Update
                  </button>
                </form>
              </div>
        </>
    )
}