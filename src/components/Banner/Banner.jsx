// BannerSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Welcome to Our Community",
    description: "Join groups based on your hobbies and meet like-minded people.",
    image: "https://i.ibb.co/5XrMfSqW/image.png",
  },
  {
    id: 2,
    title: "Discover New Hobbies",
    description: "Explore a variety of interests and grow your skills.",
    image: "https://i.ibb.co/bRXH0bwL/image.png",
  },
  {
    id: 3,
    title: "Make New Friends",
    description: "Connect with people near you and build lasting friendships.",
    image: "https://i.ibb.co/mCbr4FxB/image.png",
  },
];

export const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[500px] xl:h-700px bg-cover bg-center flex items-center justify-center text-white text-center px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-8 rounded-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
