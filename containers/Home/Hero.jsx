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
import Link from "next/link"; // Updated for Next.js
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
        <div className="bg-white/70 rounded-md  w-[450px] lg:max-2xl:w-[320px] max-sm:w-[350px] absolute right-12 top-40  lg:max-2xl:top-36 z-20 p-4 lg:max-2xl:p-3 shadow-lg  ">
          <p className="flex justify-center text-[#2D3845] font-light text-center text-[40px] lg:max-2xl:text-4xl">
            Get Free Consultation{" "}
          </p>
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold hidden lg:max-2xl:block sm:max-lg:block max-sm:block"
          >
            ✕
          </button>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1  gap-4 lg:max-2xl:gap-2 text-sm">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="w-full p-3 lg:max-2xl:p-2 lg:max-2xl:text-xs border border-[#77777733] rounded-lg outline-none bg-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_mail"
                  placeholder="Email"
                  required
                  className="w-full p-3 lg:max-2xl:p-2 lg:max-2xl:text-xs border border-[#77777733] rounded-lg outline-none bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1   gap-4 lg:max-2xl:gap-2 mt-3 lg:max-2xl:mt-2 text-sm">
              <div>
                <input
                  type="text"
                  name="from_number"
                  placeholder="Phone"
                  required
                  className="w-full p-3 lg:max-2xl:p-2 lg:max-2xl:text-xs border border-[#77777733] rounded-lg outline-none bg-white"
                />
              </div>
              {/* <div>
                <input
                  type="text"
                  name="from_description"
                  placeholder="Subject"
                  required
                  className="w-full p-3 lg:max-2xl:p-2 lg:max-2xl:text-xs border border-[#77777733] rounded-lg outline-none bg-white"
                />
              </div> */}
            </div>

            {/* <div className="mt-3 lg:max-2xl:mt-2 text-sm">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full p-3 lg:max-2xl:p-2 lg:max-2xl:text-xs border border-[#77777733] rounded-lg outline-none bg-white"
              ></textarea>
            </div> */}
            {/* <div> */}
            <button
              type="submit"
              disabled={loading}
              className="px-[5rem] w-full mt-3 lg:max-2xl:mt-2 bg-blue-500 text-white py-3 lg:max-2xl:py-2  rounded-full hover:bg-blue-600 transition font-bold max-sm:text-sm max-sm:px-[1rem]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {/* </div> */}
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
