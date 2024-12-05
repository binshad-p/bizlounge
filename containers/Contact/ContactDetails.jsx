import React from 'react'
import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="grid grid-cols-3 gap-12 py-[7.5rem] padding-x   max-sm:py-[5rem] max-sm:grid-cols-1  max-sm:gap-5 sm:max-lg:py-[3rem] sm:max-lg:gap-5">
    <div className="bg-[#F5F8FB] rounded-md py-10 w-full flex flex-col justify-center items-center gap-5  max-sm:py-5 sm:max-lg:py-5">
      <div className="bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center">
        <MapPin color="white" size={35} />
      </div>
      <p className="text-[#2D3845] text-xl font-semibold">Our Address</p>
      <span className="text-[#5D6975] font-light w-[60%] text-center">
        51 Somestreet Cambridge, CB4 3AA, United Kingdom
      </span>
    </div>

    <div className="bg-[#F5F8FB] rounded-md py-10 w-full flex flex-col justify-center items-center gap-5  max-sm:py-5 sm:max-lg:py-5">
      <div className="bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center">
        <PhoneCall color="white" size={35} />
      </div>
      <p className="text-[#2D3845] text-xl font-semibold">Phone Number</p>
      <span className="text-[#5D6975] font-light w-[90%] text-center">
        Mobile: (+88) 090 1900 – 6886 <br /> Mobile: (+88) 090 1900 – 6886
      </span>
    </div>

    <div className="bg-[#F5F8FB] rounded-md py-10 w-full flex flex-col justify-center items-center gap-5  max-sm:py-5 sm:max-lg:py-5">
      <div className="bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center">
        <Mail color="white" size={35} />
      </div>
      <p className="text-[#2D3845] text-xl font-semibold">Email Address</p>
      <span className="text-[#5D6975] font-light  text-center">
        info@example.com <br />
        info@example.com
      </span>
    </div>
  </div>
  )
}

export default ContactDetails