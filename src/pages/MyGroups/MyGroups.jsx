import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { MyGroupsEmpty } from "./MyGroupsEmpty";
import { Loader } from "../Loader/Loader";
import swal from "sweetalert";

export const MyGroups = () => {
  const { user } = use(AuthContext);
  const [groupData, setGroupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch(`https://hobmeet-server.vercel.app/mygroups/${user.email}`);
    const data = await res.json();
    setIsLoading(false);
    setGroupData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteGroup = (id) => {
    swal({
      title: "Are you sure?",
      text: "Do You want to Delete this Group?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://hobmeet-server.vercel.app/group/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swal("Deleted", "Your group has been deleted", {
                icon: "success",
              });
              const remainingGroup = groupData.filter((group) => group._id !== id);
              setGroupData(remainingGroup);
            } else {
              swal("Failed to delete the group!", { icon: "error" });
            }
          })
          .catch(() => {
            swal("Something went wrong!", { icon: "error" });
          });
      }
    });
  };

  useEffect(() => {
    document.title = "My Groups - HobMeet";
    return () => {
      document.title = "HobMeet";
    };
  }, []);

  if (isLoading) return <Loader />;
  if (groupData.length === 0) return <MyGroupsEmpty />;

  return (
    <section className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm  text-gray-700 text-center">
            <thead className="bg-gray-800 font-bold text-white uppercase">
              <tr>
                <th className="py-3 px-2">#</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Group</th>
                <th className="py-3 px-2">Members</th>
                <th className="py-3 px-2">Category</th>
                <th className="py-3 px-2">Update</th>
                <th className="py-3 px-2">Delete</th>
              </tr>
            </thead>
            <tbody >
              {groupData.map((item, index) => (
                <tr
                  key={item._id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{item.userName}</td>
                  <td className="py-3 px-2">{item.groupName}</td>
                  <td className="py-3 px-2">{item.members}</td>
                  <td className="py-3 px-2">{item.hobbyCategory}</td>
                  <td className="py-3 px-2">
                    <button
                      onClick={() => navigate(`/updategroup/${item._id}`)}
                      className="bg-amber-400 hover:bg-amber-500 text-white font-medium py-1 px-3 rounded"
                    >
                      Update
                    </button>
                  </td>
                  <td className="py-3 px-2">
                    <button
                      onClick={() => handleDeleteGroup(item._id)}
                      className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
