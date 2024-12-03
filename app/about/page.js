import Counter from "@/components/Counter";
import Banner from "@/containers/About/Banner";
import Vision_Mission from "@/containers/About/Vision_Mission";
import About from "@/containers/Home/About";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      <Banner />
      <About />

      <Vision_Mission />
      <Counter />
    </div>
  );
};

export default page;
