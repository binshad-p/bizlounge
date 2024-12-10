import { whatsapp_icon } from "@/public/assets";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const EasyConnect = () => {
  return (
    <div className="p-10 bg-primary rounded-md text-white flex justify-between max-sm:flex-col max-sm:p-5 lg:max-2xl:p-5 sm:max-lg:p-5">
      <p className="flex flex-col  font-light text-[40px] max-sm:text-2xl lg:max-2xl:text-2xl sm:max-lg:text-2xl sm:max-lg:justify-center lg:max-2xl:justify-center max-sm:items-center">
        Let’s make it easy
        <span className="font-semibold"> connect with us quickly!</span>{" "}
      </p>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:mt-10">
        <div className="flex flex-col justify-center items-center gap-3  border-r-2 border-dashed border-white pr-5 max-sm:border-r-0 max-sm:border-b-2 max-sm:pb-5">
          <PhoneCall size={40} />
          <p className="text-lg font-semibold mb-0 lg:max-2xl:text-base sm:max-lg:text-sm sm:max-lg:min-w-max">
            +971 544702611
          </p>
          <span className="text-sm font-light">Call Us Now !</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3  border-r-2 border-dashed border-white pr-5 max-sm:border-r-0 max-sm:border-b-2 max-sm:pb-5">
          <Mail size={40} />
          <p className="text-lg font-semibold mb-0 lg:max-2xl:text-base sm:max-lg:text-sm">
            info@bizloungeglobal.com
          </p>
          <span className="text-sm font-light">Drop Us a Line</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3  ">
          <FaWhatsapp size={40} />
          <p className="text-lg font-semibold mb-0 lg:max-2xl:text-base sm:max-lg:text-sm">
            +971 544702611
          </p>
          <span className="text-sm font-light">Chat on WhatsApp</span>
        </div>
      </div>
    </div>
  );
};

export default EasyConnect;
