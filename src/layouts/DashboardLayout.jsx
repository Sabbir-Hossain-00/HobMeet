import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export const DashboardLayout = () => {
  const{isDark} = use(AuthContext)
  return (
    <>
      <div className="relative min-h-screen md:flex bg-white">
        {/* Left Side: Sidebar Component */}
        <Sidebar />
        {/* Right Side: Dashboard Dynamic Content */}
        <div className="flex-1  md:ml-64">
          <div className={` ${isDark ? "bg-gray-900 text-white ":"bg-blue-50 text-black"}`}>
            {/* Outlet for dynamic contents */}
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};
