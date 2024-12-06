import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required Swiper modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import { home_hero_data } from "@/constant";

const Hero = () => {
  return (
    <div className="relative max-sm:h-[100vh] sm:max-lg:h-[100vh]">
      <Swiper
        centeredSlides={true}
        effect={"fade"}
        slidesPerView={1} // Show one slide at a time
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="customFadeSwiper"
      >
        {home_hero_data.map((item, index) => (
          <SwiperSlide className="fade-slide" key={index}>
            <div className="relative max-sm:h-[100vh]">
              <div className="absolute z-10 left-40 top-[47%] -translate-y-[50%] max-sm:left-4 sm:max-lg:left-8">
                <h1 className="   text-6xl font-semibold  text-white w-[65%] mb-8 max-sm:text-2xl sm:max-lg:text-xl">
                  {item?.title}
                </h1>
                <p className="  text-xl font-light  text-white opacity-60 w-[60%] max-sm:text-sm sm:max-lg:text-sm max-sm:w-[80%] max-sm:text-justify">
                  {item?.desc}
                </p>
              </div>
              <Image
                src={item?.image } // Fallback in case item.image is undefined
                alt="Slide image"
                width={800}
                height={600}
                unoptimized
                className="relative w-full max-sm:h-[100vh] lg:max-2xl:h-[100vh] sm:max-lg:h-[100vh] object-cover hero_img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
