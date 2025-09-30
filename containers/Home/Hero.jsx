"use client";

import React, { useEffect, useState } from "react";
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

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current?.reset();
        toast.success("Submitted Successfully!", { position: "top-right" });
      })
      .catch(() => {
        toast.error("Submission failed. Please try again.", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const [showForm, setShowForm] = useState(false);

  // ⏳ Show form after 5 sec
  useEffect(() => {
    if (window.innerWidth < 1500) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowForm(true);
    }
  }, []);

  return (
    <div className="relative max-sm:h-[100vh] sm:max-lg:h-[100vh]">
      {showForm && (
        <div className="rounded-md   absolute md:right-12  bottom-0 lg:top-40    lg:max-2xl:top-36 z-20 p-0 lg:max-2xl:p-3 shadow-lg  ">
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold hidden lg:max-2xl:block sm:max-lg:block max-sm:block"
          >
            ✕
          </button>
          <form ref={form} onSubmit={sendEmail}>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8    md:w-[330px] lg:w-[500px] w-[100vw]  mt-10 md:mt-0 ">
              <h2 className="text-[33px]   font-bold text-blue-900 mb-1 md:mb-4  leading-[50px] min-w-max">
                Get Free <br className="sm:block md:block lg:hidden" />{" "}
                Consultation
              </h2>
              <div className="flex flex-col gap-2 md:gap-4">
                <div className=" w-full py-3">
                  <label className="font-normal text-base text-[#4E4F53] ">
                    Full name *
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full  border-[0.800px] rounded-md  pl-2 pr-[15px] py-[15px] outline-none focus:ring-2 border-[#ced4da] text-[black] mt-2"
                  />
                </div>
                <div className="">
                  <label className="font-normal text-base text-[#4E4F53]  ">
                    Phone no. *
                  </label>
                  <div className="flex gap-1 mt-2">
                    {/* <input
                  type="text"
                  defaultValue="+971"
                  className="w-20  border-[0.800px] rounded-l-md  py-[15px] pl-[10px] pr-[15px] outline-none focus:ring-2 border-[#ced4da] text-black text-left"
                /> */}
                    <input
                      name="from_number"
                      type="number"
                      required
                      placeholder="Phone no."
                      className="flex-1  border-[0.800px] rounded-md py-[15px] pl-2 pr-[15px] outline-none focus:ring-2 border-[#ced4da] text-[black]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold"
                >
                  {loading ? "Sending.." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <Swiper
        centeredSlides
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="customFadeSwiper h-full"
      >
        {home_hero_data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <div className="absolute z-10 left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
                  {item?.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80">
                  {item?.desc}
                </p>
              </div>

              <Image
                src={item?.image}
                alt="Slide image"
                width={1920}
                height={1080}
                priority
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
