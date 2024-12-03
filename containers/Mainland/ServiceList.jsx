import React from 'react'
import {  mainland_service_data } from "@/constant";
import Image from "next/image";

const ServiceList = () => {
  return (
    <div className="padding-x py-[5rem] bg-service_bg flex flex-col justify-center items-center max-sm:py-[2rem] bg-no-repeat bg-cover">
    <div className="grid grid-cols-2 gap-12 py-20 px-5 max-sm:py-10 max-sm:grid-cols-1 max-sm:px-1">
      {mainland_service_data?.map((item, index) => (
        <div
          className="p-8 flex flex-col gap-6 justify-center items-start bg-[#2D3845] border border-[#404B57] rounded-md cursor-pointer group transition-colors duration-300 hover:bg-primary max-sm:p-4"
          key={index}
        >
          <div className="w-[85px] h-[85px] rounded-full bg-[#29333F] flex justify-center items-center group-hover:bg-white">
            <Image
              src={item?.image}
              alt={item?.title}
              width={40}
              height={40}
              className="transition-opacity duration-300 hidden group-hover:block"
            />
            <Image
              src={item?.image1}
              alt={item?.title}
              width={40}
              height={40}
              className="transition-opacity duration-300 block group-hover:hidden"
            />
          </div>
          <p className="text-xl font-semibold text-[#FFFFFF] ">
            {item?.title}
          </p>
          <p className="text-sm font-extralight text-[#9FAEBE] ">
            {item?.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ServiceList