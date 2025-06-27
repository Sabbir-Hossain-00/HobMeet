import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Newsletter = () => {
  const { isDark } = use(AuthContext);
  return (
    <section className="py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
      <div
        className={`w-full border-2 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden rounded-3xl ${
          isDark
            ? "bg-[#000000] border-[#122729]"
            : "bg-white border-amber-50"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4 tracking-tight">
            Stay in the Loop. Lead the{" "}
            <span className={`${isDark ? "text-amber-400" : "text-amber-400"}`}>
              Change
            </span>
          </h2>
          <p className="text-base sm:text-lg  mb-8">
            Subscribe to HobMeet updates and never miss a chance to join
            powerful community-driven groups. Be the first to hear about local
            missions, inspiring stories, and real opportunities to lead change.
          </p>

          <form className="flex  items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email "
              className={`w-full sm:w-auto pl-4 pr-20 py-3 rounded-tl-full rounded-bl-full ${
                isDark ? "bg-amber-50 text-black" : "bg-amber-50"
              }`}
            />
            <button
              type="submit"
              className={` transition text-black  font-semibold px-6 py-3 rounded-tr-full rounded-br-full  shadow-lg ${
                isDark ? "bg-amber-400" : "bg-amber-400"
              }`}
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm  mt-4">
            No spam, just impact. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
