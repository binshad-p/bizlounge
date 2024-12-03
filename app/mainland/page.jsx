import EasyConnect from "@/components/EasyConnect";
import Enquiry from "@/components/Enquiry";
import Banner from "@/containers/Mainland/Banner";
import HeroSection from "@/containers/Mainland/HeroSection";
import ServiceList from "@/containers/Mainland/ServiceList";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      <Banner />
      <HeroSection />
    
      <ServiceList />
      <div className=" pt-[4rem]">
      <Enquiry />
      </div>
      <div className="padding-x py-[4rem]">
        <EasyConnect />
      </div>
    </div>
  );
};

export default page;
