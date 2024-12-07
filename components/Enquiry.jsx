"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link"; // Updated for Next.js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Enquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zphsnaw",
        "template_zuhd2q4",
        form.current,
        "hglgJJcVwSvmNjWSh"
      )
      .then((result) => {
        console.log(result.text);
      
        // Reset the form
        if (form && form.current) {
          form.current.reset();
        }
      
        // Display success toast message
        toast.success("Submitted Successfully!", {
          position: "top-right", // Correct usage for toast position
        });
      })
      .catch((error) => {
        console.error("Submission failed:", error);
      
        // Display error toast message (optional for handling errors)
        toast.error("Submission failed. Please try again.", {
          position: "top-right",
        });
      });
      
  };

  return (
    <div className="padding-x ">
      <ToastContainer />

      <div className=" mx-auto px-4 py-12 max-sm:px-[0rem] max-sm:py-[0rem]">
        <div className="flex max-sm:flex-col-reverse sm:max-lg:flex-col-reverse justify-between gap-[54px] max-sm:gap-[20px]">
            <div className="mb-4 w-1/2  max-sm:w-full sm:max-lg:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.498780741067!2d55.2601053!3d25.1863966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690046d1306f%3A0xa4656ea6020414b4!2z2YXYudio2LEg2YXYtNin2Kkg2KfZhNiu2YTZitisINin2YTYqtis2KfYsdmK!5e0!3m2!1sen!2sin!4v1733508765471!5m2!1sen!2sin"
                title="Google Map"
                className="w-[90%] h-[28rem] border-0 max-sm:w-full sm:max-lg:w-full max-sm:h-[18rem]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          <div className=" flex flex-col gap-4 w-1/2  max-sm:w-full sm:max-lg:w-full">
            <div className="flex flex-col  mb-5">
              <p className="text-[#9EA9B3] text-sm font-medium uppercase">
                Contact Us
              </p>

              <p className="flex text-[#2D3845] font-light text-[40px]">
                Get in
                <span className="font-semibold"> &nbsp; touch</span>{" "}
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-sm">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder=" Name"
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="from_mail"
                    placeholder="Email "
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <input
                    type="text"
                    name="from_number"
                    placeholder="Phone "
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="from_description"
                    placeholder="Subject"
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none "
                  />
                </div>
              </div>

              <div className="mt-4 text-sm">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className="w-full p-3 border border-[#77777733] rounded-lg outline-none  "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className=" px-[5rem] mt-4 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition font-bold max-sm:text-sm max-sm:px-[1rem]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
