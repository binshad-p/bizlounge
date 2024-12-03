import React from 'react'
import Image from "next/image";
import {  service_logo } from "@/assets";

const ServiceList = () => {
  return (
    <div className="bg-[#F5F8FB] py-[7.5rem] padding-x max-sm:py-[2rem]">
    <div className="flex flex-col justify-center items-center gap-3 max-sm:items-start">
      <p className="uppercase text-sm text-[#B2B8BF] font-medium text-center">
        Connecting Partners
      </p>

      <p className="flex   font-light text-[40px] max-sm:text-xl max-sm:flex-col">
        We work closely with all &nbsp;
        <span className="font-semibold"> Government Agencies</span>
      </p>
    </div>

    <div className="grid grid-cols-5 gap-10 mt-12 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="bg-white p-7 rounded-lg flex justify-center items-center">
        <Image
          src={service_logo}
          alt="service logo"
          width={80}
          height={80}
          className="h-20"
        />
      </div>
      <div className="bg-white p-7 rounded-lg flex justify-center items-center">
        <Image
          src={service_logo}
          alt="service logo"
          width={80}
          height={80}
        />
      </div>
    </div>
  </div>
  )
}

export default ServiceList