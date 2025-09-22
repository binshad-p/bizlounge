import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { UserRound } from "lucide-react";
import { TestmonialData } from "@/constant";

const Testmonial = () => {
  return (
    <div className="flex flex-col items-center justify-center padding-x pt-[7.5rem] max-sm:flex-col ">
      <div className="max-sm:w-full">
        <p className="uppercase text-sm text-[#B2B8BF] font-medium text-center max-sm:text-start">
          Testimonials
        </p>
        <h2 className="flex font-light text-[40px] max-sm:text-2xl max-sm:flex-col">
          Knows About &nbsp;
          <span className="font-semibold"> Our Customer Say</span>
        </h2>
      </div>

      <div className="w-full py-[60px] max-sm:py-[20px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {TestmonialData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-[#F5F8FB] p-7 rounded-lg h-[330px] max-lg:h-[500px] max-sm:h-[460px]">
                <div className="flex items-center gap-2">
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#2D3845]">
                    <UserRound size={40} color="white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary text-lg">{item?.name}</p>
                    <p className="text-[#909AA4] text-sm font-light">Happy Client</p>
                  </div>
                </div>
                <p className="text-[#37373f]  font-light">
                  {item?.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonial;
