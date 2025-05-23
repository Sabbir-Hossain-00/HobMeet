// // BannerSlider.jsx
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { useNavigate } from "react-router";

// const slides = [
//   {
//     id: 1,
//     title: "Welcome to Our Community",
//     description: "Join groups based on your hobbies and meet like-minded people.",
//     image: "https://i.ibb.co/Zpnm4trT/12431.jpg",
//   },
//   {
//     id: 2,
//     title: "Discover New Hobbies",
//     description: "Explore a variety of interests and grow your skills.",
//     image: "https://i.ibb.co/q3gZ1htb/bridge-sea-middle-mountains.jpg",
//   },
//   {
//     id: 3,
//     title: "Make New Friends",
//     description: "Connect with people near you and build lasting friendships.",
//     image: "https://i.ibb.co/278nvsnm/spooky-scene-with-old-house.jpg",
//   },
// ];

// export const Banner = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="z-0 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 w-full">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         loop={true}
//         autoplay={{ delay: 2000 }}
//         pagination={{ clickable: true }}
//         navigation
//         className="mySwiper"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className=" rounded-3xl mt-12 h-[300px] md:h-[500px] xl:h-[700px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
//               style={{
//                 backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url(${slide.image})`,
//               }}
//             >
//               <div className="p-8 rounded-xl">
//                 <h2 className="text-2xl md:text-4xl font-semibold mb-4">{slide.title}</h2>
//                 <p className="text-lg md:text-xl">{slide.description}</p>
//                 <button
//                   onClick={() => navigate("/allgroups")}
//                   className="btn border-none bg-amber-300 hover:bg-amber-400 mt-3"
//                 >
//                   Explore More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };






import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 pt-12 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          {" "}
          <div
            className="  hero h-[300px] md:h-[500px] xl:h-[700px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Zpnm4trT/12431.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white ">
              <div className="w-full  flex flex-col justify-center items-center">
                <h1 className="text-center md:mb-2 w-full md:w-full text-lg md:text-3xl font-bold">
                  Welcome to Our <span className="text-amber-400">Community</span>
                </h1>
                <p className="text-center text-xs md:text-sm mb-2">
                  Join groups based on your hobbies and meet like-minded people.
                </p>
                <button onClick={()=>navigate("/allgroups")} className="btn border-none  bg-amber-300 hover:bg-amber-400">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className=" hero h-[300px] md:h-[500px] xl:h-[700px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/q3gZ1htb/bridge-sea-middle-mountains.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white">
              <div className="w-full  flex flex-col justify-center items-center">
                <h1 className="text-center md:mb-2 w-full md:w-full text-lg md:text-3xl font-bold">
                 Discover New <span className="text-amber-400">Hobbies</span>
                </h1>
                <p className="text-center text-xs md:text-sm mb-2">
                  Explore a variety of interests and grow your skills.
                </p>
                <button onClick={()=>navigate("/allgroups")} className="btn border-none  bg-amber-300 hover:bg-amber-400">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className=" hero h-[300px] md:h-[500px] xl:h-[700px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/278nvsnm/spooky-scene-with-old-house.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white">
              <div className="w-full  flex flex-col justify-center items-center">
                <h1 className="text-center md:mb-2 w-full md:w-full text-lg md:text-3xl font-bold">
                  Make New <span className="text-amber-400">Friends</span>
                </h1>
                <p className="text-center text-xs md:text-sm mb-2">
                  Connect with people near you and build lasting friendships.
                </p>
                <button onClick={()=>navigate("/allgroups")} className="btn border-none  bg-amber-300 hover:bg-amber-400">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


