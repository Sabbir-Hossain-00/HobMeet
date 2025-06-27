import { use, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import MenuItem from "../MenuItem/MenuItem";
import { FaUserPlus } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { HobmeetLogo } from "../HobmetLogo/HobmeetLogo";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
export const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { user, logOut , isDark ,setIsDark } = use(AuthContext);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const toggleTheme = () => {
    setIsDark(prev => !prev);
    localStorage.setItem("hobMeetTheme",JSON.stringify(!isDark))
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <HobmeetLogo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden ${isDark ?"bg-gray-800":"bg-gray-100"} w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full cursor-pointer hidden md:flex px-4 py-2  rounded-lg justify-center items-center mx-auto">
              <HobmeetLogo />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-10">
            <nav className="flex flex-col gap-1">
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `${isDark ? "text-gray-200":"text-gray-600"} flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive  ? "bg-gray-300  text-black" : ""
                  }`
                }
              >
                <img
                  className=" bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 p-0.5 w-8 h-8 rounded-full"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co.com/0jKWX0cD/user-png-33832.png"
                  }
                  alt="user"
                /> 
                <p className="mx-4 font-medium">{user?.displayName}</p>
              </NavLink>
              <MenuItem
                icon={AiFillHome}
                label="Home"
                address="/dashboard"
              />
              <MenuItem
                icon={FaUserGroup}
                label="All Groups"
                address="allGroups"
              />
              <MenuItem
                icon={FaUserPlus}
                label="Create Groups"
                address="createGroups"
              />
              <MenuItem
                icon={FaUsers}
                label="My Groups"
                address="myGroups"
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <div
            onClick={toggleTheme}
            className={`cursor-pointer mt-6 ml-3 w-12 h-7 sm:w-14 sm:h-8 flex items-center rounded-full p-1 transition duration-300 ${isDark ? "bg-gray-700" : "bg-amber-400"}`}
          >
            <div
              className={`bg-white w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isDark ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}`}
            >
              {isDark ? (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 m-auto md:mt-1 mt-0.5 text-black" />
              ) : (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 m-auto md:mt-1 mt-0.5 text-yellow-500" />
              )}
            </div>
          </div>

          <button
            onClick={logOut}
            className={`flex w-full items-center px-4 py-2 mt-5  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform ${isDark? "text-gray-200":"text-gray-600"}`}
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};
