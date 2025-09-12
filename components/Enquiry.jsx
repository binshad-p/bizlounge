"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link"; // Updated for Next.js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Enquiry = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

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

  return (
    <div className="padding-x ">
      <ToastContainer />

      <div className=" mx-auto px-4 py-12 max-sm:px-[0rem] max-sm:py-[0rem]">
        <div className="flex max-sm:flex-col-reverse sm:max-lg:flex-col-reverse justify-between gap-[54px] max-sm:gap-[20px]">
          <div className="mb-4 w-1/2  max-sm:w-full sm:max-lg:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57767.988330416505!2d55.21891157866026!3d25.18638006818356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f697479261d03%3A0xd63b2dc589a4f7ac!2sBIZLOUNGE!5e0!3m2!1sen!2sin!4v1751538242796!5m2!1sen!2sin"
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
                <span className="font-semibold"> &nbsp; Touch</span>{" "}
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
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="from_mail"
                    placeholder="Email "
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none "
                    required
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
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="from_description"
                    placeholder="Subject"
                    className="w-full p-3 border border-[#77777733] rounded-lg outline-none "
                    required
                  />
                </div>
              </div>

              <div className="mt-4 text-sm">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  className="w-full p-3 border border-[#77777733] rounded-lg outline-none  "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className=" px-[5rem] mt-4 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition font-bold max-sm:text-sm max-sm:px-[1rem]"
                >
                  {loading ? "Sending..." : "Send Request"}
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
