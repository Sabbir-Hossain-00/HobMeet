import React, { use } from 'react';
import { FaUserFriends, FaCommentDots } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="relative min-h-[90vh]">
      {/* Top 35% background - darker amber gradient */}
      <div className="md:h-[38vh] h-[60vh] bg-gradient-to-tr from-amber-600 to-yellow-500" />

      {/* Floating Card */}
      <div className="absolute p-3 top-[20vh] w-full flex justify-center">
        <div className="relative bg-white rounded-3xl shadow-xl text-center px-6 py-10 max-w-xl w-full">
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
          <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
          <p className="text-sm text-gray-500">New York, United States</p>

          {/* Job Info */}
          <div className="mt-2 text-gray-600 text-sm leading-relaxed">
            <p>Web Producer - Web Specialist</p>
            <p>Columbia University - New York</p>
          </div>

          {/* Stats */}
          <div className="mt-6 flex justify-center gap-10 text-gray-700">
            <div>
              <p className="font-bold text-lg">65</p>
              <p className="text-sm">Friends</p>
            </div>
            <div>
              <p className="font-bold text-lg">43</p>
              <p className="text-sm">Photos</p>
            </div>
            <div>
              <p className="font-bold text-lg">21</p>
              <p className="text-sm">Comments</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6  btn btn-sm md:btn-md  border-none  bg-amber-300 hover:bg-amber-400">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
