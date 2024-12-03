import { home_why_choose_us, service_logo } from "@/assets";
import EasyConnect from "@/components/EasyConnect";
import Enquiry from "@/components/Enquiry";
import Banner from "@/containers/Freezone/Banner";
import HeroSection from "@/containers/Freezone/HeroSection";
import ServiceList from "@/containers/Freezone/ServiceList";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      <Banner />
      <HeroSection />
    
      <ServiceList />
      <div className="py-[5rem]">
    

      <Enquiry />
      <div className="padding-x pt-[4rem]">
        <EasyConnect />
      </div>
      </div>
    </div>
  );
};

export default page;
