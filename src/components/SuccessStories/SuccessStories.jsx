import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SuccessStories = () => {
    const {isDark} = use(AuthContext);
  return (
    <section className=" container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 md:py-16 pb-10">
      <div className={` md:py-20 md:px-10 p-2 ${isDark ? "bg-gradient-to-b from-black rounded-2xl to-gray-900]": "bg-gradient-to-b from-amber-50 to-slate-100"}`}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold  mb-2 ${isDark? "text-gray-100" : "text-gray-800"}`} >
            From Passion to Connection
          </h2>
          <p className={`${isDark? "text-gray-200":"text-gray-600"}`}>
            Real people. Real stories. Discover how HobMeet is helping hobbyists connect and grow.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Story 1 */}
          <div className={` rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ${isDark?"bg-gray-900 " : "bg-white"}`}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Sadia Rahman"
                className="  rounded-full border-2 border-amber-300"
              />
              <div>
                <h4 className={`font-semibold  ${isDark ? "text-white":"text-gray-800"}`}>Sadia Rahman</h4>
                <p  className={` text-sm   ${isDark ? "text-gray-300":"text-gray-500"} `}>Photography Enthusiast</p>
              </div>
            </div>
            <p >
              "I found my dream photography team on HobMeet. We've even started hosting events together!"
            </p>
          </div>

          {/* Story 2 */}
          <div className={` rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ${isDark?"bg-gray-900  " : "bg-white"}`}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/51.jpg"
                alt="Rifat Hossain"
                className="  rounded-full border-2 border-amber-300"
              />
              <div>
                <h4 className={`font-semibold  ${isDark ? "text-white":"text-gray-800"}`}>Rifat Hossain</h4>
                <p className={` text-sm   ${isDark ? "text-gray-300":"text-gray-500"} `}>Programming Enthusiast</p>
              </div>
            </div>
            <p >
              "Thanks to HobMeet, I joined a coding group that helped me get my first freelance job."
            </p>
          </div>

          {/* Story 3 */}
          <div className={` rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ${isDark?"bg-gray-900 " : "bg-white"}`}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/88.jpg"
                alt="Nabila Sultana"
                className="  rounded-full border-2 border-amber-300"
              />
              <div>
                <h4 className={`font-semibold  ${isDark ? "text-white":"text-gray-800"}`}>Nabila Sultana</h4>
                <p className={` text-sm   ${isDark ? "text-gray-300":"text-gray-500"} `}>Crafting Enthusiast</p>
              </div>
            </div>
            <p >
              "I never thought crafting could connect me to so many amazing people. Now I host weekend workshops!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

