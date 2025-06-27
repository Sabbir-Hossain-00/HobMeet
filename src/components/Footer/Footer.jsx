import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router";
import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";
import { HobmeetLogo } from "../HobmetLogo/HobmeetLogo";

export const Footer = () => {
  const { isDark, user } = use(AuthContext);
  return (
    // <section className={`py-20 ${isDark ? "bg-black":"bg-white"}`}>
    //     <footer className={`flex flex-col justify-center items-center gap-3 ${isDark ? "text-white" : "text-black"}`}>
    //       <nav>
    //         <h1 className=" text-2xl font-medium "><span className="text-amber-400">Hob</span>Meet</h1>
    //       </nav>
    //       <ul className=" flex md:flex-row flex-col justify-center items-center gap-5 text-gray-300">
              
    //       </ul>
    //       <div>
    //         <p className=" text-sm">© 2025 HobMeet. All rights reserved.</p>
    //       </div>
    //       <div>
    //         <div className="grid grid-flow-col gap-4">
    //           <a target="blank" href="https://www.facebook.com/jrsabbir00">
    //            <FacebookIcon className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
    //           </a>
    //           <a target="blank" href="https://www.instagram.com/dhali_sabbir_hossain/">
    //              <Instagram className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
    //           </a>
    //           <a target="blank" href="https://x.com/ms7398037">
    //             <Twitter className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
    //           </a>
    //           <a target="blank" href="https://github.com/Sabbir-Hossain-00">
    //             <Github className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
    //           </a>
    //         </div>
    //       </div>
    //     </footer>
    // </section>
    <section className={` ${isDark ? "bg-black" : "bg-white"}`}>
      <footer className="pt-20 py-12 px-6 sm:px-10 lg:px-20 shadow-lg">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-20 flex flex-col md:flex-row gap-12 md:gap-0  justify-between items-start">
          <div className="space-y-4">
            <div className="flex items-center">
              <HobmeetLogo/>
            </div>
            <p className={`max-w-xs ${isDark ? "text-white" : "text-black"} `}>
              Bringing communities together through powerful events and shared
              purpose. Join us and be the change you want to see.
            </p>
            <div className="flex space-x-4 mt-4">
              <a target="blank" href="https://www.facebook.com/jrsabbir00">
                <FacebookIcon className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
              </a>
               <a target="blank" href="https://www.instagram.com/dhali_sabbir_hossain/">
                  <Instagram className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
               </a>
               <a target="blank" href="https://x.com/ms7398037">
                 <Twitter className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
               </a>
              <a target="blank" href="https://github.com/Sabbir-Hossain-00">
                 <Github className={` hover:text-amber-400 transition duration-500 text-2xl cursor-pointer ${isDark ? "text-white" : "text-black"}`}/>
              </a>
            </div>
          </div>

          <div>
            <h4
              className={`text-xl font-semibold mb-4 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>Home</NavLink></li>
             <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/allGroups" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>All Groups</NavLink></li>
             <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/contact" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>Contact</NavLink></li>
             {/* <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/support" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>Support</NavLink></li> */}
             <li className={`${isDark ? "text-white" : "text-black"}`}><NavLink to="/about" className={({ isActive }) => isActive ? "text-amber-400 font-medium" : "font-medium"}>About Us</NavLink></li>
            </ul>
          </div>

          <div className={`${isDark ? "text-white" : "text-black"}`}>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className=" mb-2">Email: ms7398037@gmail.com</p>
            <p className=" mb-2">Phone: +8 (80) 1614842054</p>
            <p className="">Address: 123 Mirpur, Dhaka</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-xs">
          &copy; 2025 Eventra. All rights reserved.
        </div>
      </footer>
    </section>
  );
};
