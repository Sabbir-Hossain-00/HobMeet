import React, { use, useEffect, useState } from 'react';
import { FaUserFriends, FaCommentDots } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../Loader/Loader';
import { useLoaderData } from 'react-router';

export const Profile = () => {
  const { user , isDark } = use(AuthContext);
  const [groupData , setGroupData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ongoingGroups = useLoaderData();
  const [allGroups , setAllGroups] = useState(null)
  



   const fetchData = async () => {
      const res = await fetch(`https://hobmeet-server.vercel.app/mygroups/${user.email}`);
      const data = await res.json();
      setIsLoading(false);
      setGroupData(data);
    };
  
    const fetchingData = async ()=>{
      const res = await fetch(`https://hobmeet-server.vercel.app/groups`);
      const data = await res.json();
      setIsLoading(false);
      setAllGroups(data);
    }
  
    useEffect(() => {
      fetchData();
      fetchingData();
    }, []);

    if(isLoading){
        return <Loader/>
    }
   console.log(user)
  return (
    <div className="relative min-h-[100vh]">
      {/* Top 35% background - darker amber gradient */}
      <div className="md:h-[38vh] h-[60vh] bg-gradient-to-tr from-amber-600 to-yellow-500" />

      {/* Floating Card */}
      <div className="absolute p-3 top-[20vh] w-full flex justify-center">
        <div className={`relative rounded-3xl shadow-xl text-center px-6 py-10 max-w-xl w-full ${isDark ? "bg-black": "bg-white"}`}>
          {/* Top Buttons */}
          <div className="flex justify-between text-amber-600 text-sm font-medium mb-6">
            <div className="flex items-center gap-1">
              <FaUserFriends />
              <span>Connect</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <FaCommentDots />
              <span>Message</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Spacer for image */}
          <div className="mt-16" />

          {/* Name and Location */}
          <h2 className="text-2xl font-semibold">{user.displayName}</h2>
          <p className={`text-sm  ${isDark ? "text-gray-300": "text-gray-500"}`}>{user?.email}</p>

          {/* Job Info */}
          <div className={`mt-2 text-sm leading-relaxed ${isDark ? "text-gray-300": "text-gray-500"}`}>
            <p>UID : {user?.uid}</p>
          </div>


          {/* Stats */}
          <div className="mt-6 flex justify-center gap-10">
            <div>
              <p className="font-bold text-lg">{groupData?.length}</p>
              <p className="text-sm">My Groups</p>
            </div>
            <div>
              <p className="font-bold text-lg">{allGroups?.length}</p>
              <p className="text-sm">Total Groups</p>
            </div>
            <div>
              <p className="font-bold text-lg">{ongoingGroups?.length}</p>
              <p className="text-sm">Active Groups</p>
            </div>
          </div>

          {/* Button */}
          <button  className="mt-6  btn btn-sm md:btn-md  border-none  bg-amber-400">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

