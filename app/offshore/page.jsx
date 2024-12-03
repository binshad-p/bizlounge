import EasyConnect from "@/components/EasyConnect";
import Enquiry from "@/components/Enquiry";
import Banner from "@/containers/Offshore/Banner";
import HeroSection from "@/containers/Offshore/HeroSection";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      <Banner />
      <HeroSection />

      <div className="py-[5rem]">
        <Enquiry />
      </div>

      <div className="padding-x pb-[4rem]">
        <EasyConnect />
      </div>
    </div>
  );
};

export default page;
