import { whatsapp_icon } from "@/assets";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const EasyConnect = () => {
  return (
    <div className="p-10 bg-primary rounded-md text-white flex justify-between max-sm:flex-col max-sm:p-5 ">
      <p className="flex flex-col  font-light text-[40px] max-sm:text-xl">
        Let’s make it easy
        <span className="font-semibold"> connect with us quickly!</span>{" "}
      </p>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:mt-10">
        <div className="flex flex-col justify-center items-center gap-3  border-r-2 border-dashed border-white pr-5 max-sm:border-r-0 max-sm:border-b-2 max-sm:pb-5">
          <PhoneCall size={40}/>
          <p className="text-lg font-semibold mb-0">(+01) 123 456 7890</p>
          <span className="text-sm font-light">Call Us Now !</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3  border-r-2 border-dashed border-white pr-5 max-sm:border-r-0 max-sm:border-b-2 max-sm:pb-5">
        <Mail size={40} />
        <p className="text-lg font-semibold mb-0">info@example.com</p>
          <span className="text-sm font-light">Drop Us a Line</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3  ">
        <Image src={whatsapp_icon} alt="whats app " width={40} height={40}/>
        <p className="text-lg font-semibold mb-0">(+01) 123 456 7890</p>
          <span className="text-sm font-light">Chat on WhatsApp</span>
        </div>
      </div>
    </div>
  );
};

export default EasyConnect;
