import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const HowItWorks = () => {
  const {isDark} = use(AuthContext)
  return (
    <section className=" pt-10 md:pt-20 rounded-2xl how-it-works">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 text-center">
        <h2 className={`text-2xl md:text-4xl font-semibold mb-2`}>How HobMeet Works</h2>
        <p className="text-lg mb-16">
          Follow these simple steps to discover groups, connect with hobby-mates, and <br /> join fun events that match your passion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Step 1: Sign Up */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-blue-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-user-plus text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 1: Sign Up</h3>
            <p className="text-gray-300">
              Create your profile on HobMeet with a few simple details. Your hobby adventure begins here!
            </p>
          </div>

          {/* Step 2: Explore Hobbies */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-green-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-search text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 2: Explore Hobbies</h3>
            <p className="text-gray-300">
              Search for your favorite hobbies and discover communities where you belong.
            </p>
          </div>

          {/* Step 3: Join or Create Group */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-yellow-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 3: Join or Create Group</h3>
            <p className="text-gray-300">
              Join existing hobby groups or start your own and invite friends to collaborate.
            </p>
          </div>

          {/* Step 4: Attend Events */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-orange-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-calendar-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 4: Attend Events</h3>
            <p className="text-gray-300">
              Participate in engaging events, meetups, and challenges organized by groups or HobMeet.
            </p>
          </div>

          {/* Step 5: Connect & Chat */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-purple-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-comments text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 5: Connect & Chat</h3>
            <p className="text-gray-300">
              Chat with fellow members, share moments, and stay engaged with your hobby family.
            </p>
          </div>

          {/* Step 6: Build Real Connections */}
          <div className="step bg-gray-800 p-8 xl:p-20 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700">
            <div className="icon bg-red-600 text-white p-4 rounded-full mx-auto mb-6">
              <i className="fas fa-handshake text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Step 6: Build Real Connections</h3>
            <p className="text-gray-300">
              Turn online interactions into real-world friendships and meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
