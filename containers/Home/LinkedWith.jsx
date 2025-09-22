import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {  LinkedWithData } from "@/constant";

const LinkedWith = () => {
  return (
    <div className="bg-[#fff] py-[7rem] mb-[5rem] max-sm:py-[5rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-3 mb-10 max-sm:items-start">
          <p className="uppercase text-sm text-[#B2B8BF] font-medium text-center">
            Connecting Partners
          </p>

          <h2 className="flex   font-light text-[40px] max-sm:flex-col max-sm:text-2xl sm:max-lg:text-2xl">
            We work closely with all &nbsp;
            <span className="font-semibold"> Government Agencies</span>
          </h2>
        </div>

        <Marquee>
          <div className="flex space-x-10 ">
            {LinkedWithData?.map((item,index) => (
              <Image
                src={item?.image}
                alt="logo1"
                key={index}
                width={100}
                height={100}
                className="w-auto h-20 "
              />
            ))}
            {LinkedWithData?.map((item,index) => (
              <Image
                src={item?.image}
                alt="logo1"
                key={index}
                width={100}
                height={100}
                className="w-auto h-20 "
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LinkedWith;
