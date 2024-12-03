"use client";

import Counter from "@/components/Counter";
import Enquiry from "@/components/Enquiry";
import LinkedWith from "@/containers/Home/LinkedWith";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/containers/Home/Hero"), { ssr: false });
const CompanyFormationTypes = dynamic(
  () => import("@/containers/Home/CompanyFormationTypes"),
  { ssr: false }
);
const WhoWeAre = dynamic(() => import("@/containers/Home/WhoWeAre"), {
  ssr: false,
});
const About = dynamic(() => import("@/containers/Home/About"), { ssr: false });
const OurServices = dynamic(() => import("@/containers/Home/OurServices"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/containers/Home/WhyChooseUs"), {
  ssr: false,
});
const Testmonial = dynamic(() => import("@/containers/Home/Testmonial"), {
  ssr: false,
});

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
      <Testmonial />
      <LinkedWith />
      <div className="pb-[5rem]">
        <Enquiry />
      </div>
    </div>
  );
}
