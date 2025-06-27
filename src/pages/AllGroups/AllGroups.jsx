import { useLoaderData } from "react-router";
import { GroupCard } from "../../components/GroupCards/GroupCard";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export const AllGroups = () => {
  const {isDark} = use(AuthContext)
  const groupData = useLoaderData();
  const [selectedHobby, setSelectedHobby] = useState("");
  const [groups, setGroups] = useState(groupData);
  const hobbies = [
    "All",
    "Drawing & Painting",
    "Photography",
    "Cooking",
    "Writing",
    "Running",
    "Video Gaming",
    "Fishing",
  ];

  useEffect(() => {
    if (!selectedHobby) return;
    console.log(selectedHobby);
    axios
      .get(
        `https://hobmeet-server.vercel.app/groups-by-category?category=${selectedHobby}`
      )
      .then((res) => setGroups(res.data))
      .catch((err) => console.error(err));
  }, [selectedHobby]);

  useEffect(() => {
    document.title = "All-Group - HobMeet";
    return () => {
      document.title = "HobMeet"; // reset on unmount
    };
  }, []);

  return (
    <section className="mt-20 py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
      <div className="flex justify-between items-center">
        <div>
          <h1 className=" text-2xl md:text-4xl  mb-3 font-medium">
            Find Your <span className="text-amber-400">Hobby</span> Tribe
          </h1>
          <p className=" text-sm md:text-base">
            Connect with like-minded people! Browse through all our hobby groups
            and <br /> find your  perfect community—whether you're into painting, <br />{" "}
            coding, gardening, gaming, or anything in between.
          </p>
        </div>
        <div className="p-6">
          {/* Dropdown */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Filter by Hobby Category
            </label>
            <select
              onChange={(e) => setSelectedHobby(e.target.value)}
              value={selectedHobby}
              className={`border border-gray-300 rounded px-4 py-2 w-full ${isDark ? "bg-black": "bg-white"}`}
            >
              <option value="">-- Select a Hobby --</option>
              {hobbies?.map((hobby, idx) => (
                <option className={`${isDark? "text-white": "text-black"}`} key={idx} value={hobby}>
                  {hobby}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {
          groups?.length === 0 && <p className="text-3xl font-medium text-center mt-20">No Groups Available Right Now</p>
        }
      <div className="py-20  text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {groups?.map((singleGroupData) => {
          return (
            <GroupCard
              key={singleGroupData._id}
              singleGroupData={singleGroupData}
            />
          );
        })}
      </div>
    </section>
  );
};
