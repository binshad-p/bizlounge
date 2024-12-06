"use client";

import Counter from "@/components/Counter";
import Enquiry from "@/components/Enquiry";
import About from "@/containers/Home/About";
import CompanyFormationTypes from "@/containers/Home/CompanyFormationTypes";
import Hero from "@/containers/Home/Hero";
import LinkedWith from "@/containers/Home/LinkedWith";
import OurServices from "@/containers/Home/OurServices";
import Testmonial from "@/containers/Home/Testmonial";
import WhoWeAre from "@/containers/Home/WhoWeAre";
import WhyChooseUs from "@/containers/Home/WhyChooseUs";



export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyFormationTypes />
      <WhoWeAre />
      <About />
      <OurServices />
      <WhyChooseUs />
      <Counter />
      {/* <Testmonial /> */}
      <LinkedWith />
      <div className="pb-[5rem]">
        <Enquiry />
      </div>
    </div>
  );
}
