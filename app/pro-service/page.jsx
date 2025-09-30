"use client";

import About from "@/containers/ProServices/About";
import Banner from "@/containers/ProServices/Banner";
import CallAction from "@/containers/ProServices/Cta";
import OurProService from "@/containers/ProServices/OurProService";

// import Counter from "@/components/Counter";
// import Enquiry from "@/components/Enquiry";
// import { Header } from "@/components/Header";
// import About from "@/containers/Home/About";
// import CompanyFormationTypes from "@/containers/Home/CompanyFormationTypes";
// import Hero from "@/containers/Home/Hero";
// import LinkedWith from "@/containers/Home/LinkedWith";
// import OurServices from "@/containers/Home/OurServices";
// import Testmonial from "@/containers/Home/Testmonial";
// import WhoWeAre from "@/containers/Home/WhoWeAre";
// import WhyChooseUs from "@/containers/Home/WhyChooseUs";
// import Banner from "@/containers/ProServices/Banner";



export default function ProServices() {
    return (
        <div>
          <Banner/>
          <About/>
          <OurProService/>
          <CallAction/>
       
           
            {/* <h1>Hello World</h1>
            <CompanyFormationTypes />
            <WhoWeAre />
            <About />
            <OurServices />
            <WhyChooseUs />
            <Counter />
            <Testmonial />
            <LinkedWith />
            <div className="pb-[5rem]">
                <Enquiry />
            </div> */}
        </div>
    );
}
