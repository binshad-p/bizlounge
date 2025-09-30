"use client";

import Testmonial from "@/containers/Home/Testmonial";
import About from "@/containers/ProServices/About";
import Banner from "@/containers/ProServices/Banner";
import CallAction from "@/containers/ProServices/Cta";
import OurProService from "@/containers/ProServices/OurProService";




export default function ProServices() {
    return (
        <div>
          <Banner/>
          <About/>
          <OurProService/>
          <Testmonial/>
          <CallAction/>
       
  
        </div>
    );
}
