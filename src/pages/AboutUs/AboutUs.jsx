import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export const AboutUs = () => {
  const {isDark} = use(AuthContext)
  return (
    <section className="min-h-screen mt-20 py-16 ">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">About HobMeet</h2>
          <p className={` leading-relaxed max-w-2xl mx-auto ${isDark? "text-gray-300":"text-gray-600"}`}>
            HobMeet is your go-to platform for connecting with like-minded individuals through shared hobbies and interest-based groups. Our mission is to turn digital friendships into real-life connections.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-20">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team collaboration"
            className="w-full rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-semibold  mb-4">Who We Are</h3>
            <p className={` leading-relaxed ${isDark? "text-gray-300":"text-gray-600"}`}>
              HobMeet was born from the idea that passion and connection should go hand in hand. Whether it's photography, gaming, music, or art – we help people find their community and grow together.
            </p>
            <p className={` leading-relaxed mt-4 ${isDark? "text-gray-300":"text-gray-600"}`}>
              Our platform enables you to create and join hobby groups, organize meetups, and interact in meaningful ways beyond typical social platforms.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className={` leading-relaxed ${isDark? "text-gray-300":"text-gray-600"}`}>
              To empower communities to build lasting relationships around what they love. We envision a world where technology helps people discover, engage, and grow offline and online together.
            </p>
            <p className={` leading-relaxed mt-4 ${isDark? "text-gray-300":"text-gray-600"}`}>
              With an intuitive interface, personalized groups, and vibrant local hubs, HobMeet is shaping the future of social interaction through hobbies.
            </p>
          </div>
          <img
            src="https://i.ibb.co/4wKgK0R5/tourists-go-up-hill-sunrise.jpg"
            alt="Mission-driven"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h4 className="text-2xl font-semibold mb-4">Ready to connect with your people?</h4>
          <p className={` leading-relaxed mb-6 ${isDark? "text-gray-300":"text-gray-600"}`}>Join HobMeet today and turn hobbies into friendships!</p>
          <Link
            to="/allGroups"
            className=" btn border-none shadow-none  text-black bg-amber-300 hover:bg-amber-400 font-semibold  transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

