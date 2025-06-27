import React, { use, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export const Support = () => {
  const {isDark} = use(AuthContext)
  const faqs = [
    {
      question: "How do I join a hobby group?",
      answer:
        "Once you're signed in, you can browse available groups under the 'Explore' section and click 'Join'.",
    },
    {
      question: "Can I create my own group?",
      answer:
        "Yes! Simply navigate to 'Create Group', fill in the group details, and invite others to join.",
    },
    {
      question: "Is HobMeet free to use?",
      answer:
        "Absolutely. HobMeet is free for all users. Some events or group features may have optional premium options.",
    },
    {
      question: "How can I delete or leave a group?",
      answer:
        "You can manage your groups from the 'My Groups' section, where you can choose to leave or delete a group.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen mt-22 py-10 ">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            Need Help? We're Here for You
          </h1>
          <p className={` text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300":"text-gray-600"}`}>
            Whether you're facing a problem or just curious about how HobMeet
            works, our support team is here to assist you every step of the way.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={` shadow-md p-6 rounded-xl hover:shadow-lg transition ${isDark? "bg-black":"bg-white"}`}>
            <div className="flex items-center gap-4 text-amber-500 mb-4">
              <FaEnvelope className="text-2xl" />
              <h3 className="text-xl font-semibold">Email Support</h3>
            </div>
            <p className={`mb-2 ${isDark ? "text-gray-300":"text-gray-600"}`}>
              Send us your questions or feedback:
            </p>
            <a
              href="mailto:support@hobmeet.com"
              className="text-amber-600 font-medium underline"
            >
              support@hobmeet.com
            </a>
          </div>

          <div className={` shadow-md p-6 rounded-xl hover:shadow-lg transition ${isDark? "bg-black":"bg-white"}`}>
            <div className="flex items-center gap-4 text-amber-500 mb-4">
              <FaPhoneAlt className="text-2xl" />
              <h3 className="text-xl font-semibold">Call Us</h3>
            </div>
            <p className={`mb-2 ${isDark ? "text-gray-300":"text-gray-600"}`}>
              Reach out between 10AM - 6PM (GMT+6)
            </p>
            <p className="text-amber-600 font-medium">+880 1234 567 890</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={` p-5 rounded-lg shadow hover:shadow-md transition cursor-pointer ${isDark? "bg-black":"bg-white"}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-amber-500 text-xl mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold ">
                        {faq.question}
                      </h4>
                      {openIndex === index && (
                        <p className={` mt-2 transition-all duration-300 ${isDark ? "text-gray-300":"text-gray-600"}`}>
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Arrow icon */}
                  <FaChevronDown
                    className={`${isDark ? "text-gray-300":"text-gray-600"} mt-1 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
