import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { UserRound } from "lucide-react";

const Testmonial = () => {
  return (
    <div className="flex flex-col items-center justify-center padding-x py-[7.5rem]">
      <div>
        <p className="uppercase text-sm text-[#B2B8BF] font-medium text-center">
          Testimonials
        </p>
        <p className="flex   font-light text-[40px]">
          knows About &nbsp;
          <span className="font-semibold"> Our Customer Say</span>
        </p>
      </div>

      <div className="w-full py-[60px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-[#F5F8FB] p-7 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#2D3845]">

                <UserRound size={40} color="white"/>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary text-lg">Henry Morgan</p>
                  <p className="text-[#909AA4] text-sm font-light">Canada</p>
                </div>
              </div>
              <p className="text-[#898A9C] text-sm font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-[#F5F8FB] p-7 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#2D3845]">

                <UserRound size={40} color="white"/>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary text-lg">Henry Morgan</p>
                  <p className="text-[#909AA4] text-sm font-light">Canada</p>
                </div>
              </div>
              <p className="text-[#898A9C] text-sm font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonial;
