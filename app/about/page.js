import { our_mission, our_vision } from "@/assets";
import Counter from "@/components/Counter";
import About from "@/containers/Home/About";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      <div className="bg-[#F5F8FB] padding-x py-[55px] flex items-center gap-5 ">
        <div className="bg-primary h-20 w-1"></div>
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-medium text-[#1D2143]">About Us</p>
          <p className="text-sm font-light text-[#898A9C]">
            Home <span>/</span> <span>About Us</span>
          </p>
        </div>
      </div>
      <About />

      <div className="padding-x flex w-full text-white gap-10 py-[5rem]">
        <div className="bg-frame1 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-lg">
          <div className="flex gap-5 items-center">
            <Image src={our_vision} alt="our vision" width={50} height={50}/>
            <p className="text-2xl font-semibold">Our Vision</p>
          </div>
          <hr></hr>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className="bg-frame2 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-md">
          <div className="flex gap-5 items-center">
            <Image src={our_mission} alt="our vision" width={50} height={50}/>
            <p className="text-2xl font-semibold">Our Mission</p>
          </div>
          <hr></hr>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
      </div>
      <Counter/>
    </div>
  );
};

export default page;
