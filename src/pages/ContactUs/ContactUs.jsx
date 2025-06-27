import React, { use } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const {isDark} = use(AuthContext)

  const onSubmit = (data) => {
    console.log("Message Sent:", data);

    // show success alert
    swal("Message Sent!", "We'll get back to you soon.", "success");

    // clear the form
    reset();
  };

  return (
    <section className="min-h-screen py-14 flex items-center mt-10">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-28 items-center">
        {/* Left - Form */}
        <div className={` shadow-xl rounded-xl p-8 ${isDark?"bg-black":"bg-white"}`}>
          <h2 className="text-3xl font-bold  mb-4">Get in Touch</h2>
          <p className={` mb-8 ${isDark? "text-gray-300":"text-gray-600"}`}>
            Have a question or want to start a conversation? We'd love to hear from you!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-medium ">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your name"
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${isDark? "text-gray-100":"text-gray-600"}`}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="your email"
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${isDark? "text-gray-100":"text-gray-600"}`}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Message</label>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                placeholder="Write your message..."
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${isDark? "text-gray-100":"text-gray-600"}`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className=" space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className={` mb-2 ${isDark? "text-gray-300":"text-gray-600"}`}>
              Feel free to reach out anytime — we're here to help!
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-amber-400 text-xl" />
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-amber-400 text-xl" />
                <p>+880 1614 842054</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-amber-400 text-xl" />
                <p>ms7398037@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="text-lg font-semibold mb-2">Support Hours</h4>
            <p>Sunday to Thursday: 10 AM – 6 PM</p>
            <p>Friday/Saturday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
