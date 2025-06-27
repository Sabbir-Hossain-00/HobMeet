import { useLoaderData } from "react-router";

export const AllGroupsDashboard = () => {
  const groupData = useLoaderData();
  console.log(groupData);
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 text-center">
            <thead className="bg-gray-800 font-bold text-white uppercase">
              <tr>
                <th className="py-3 px-2">#</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Group</th>
                <th className="py-3 px-2">Members</th>
                <th className="py-3 px-2">Category</th>
                <th className="py-3 px-2">End Date</th>
              </tr>
            </thead>
            <tbody>
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
                  <td className="py-3 px-2">{item.date}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
