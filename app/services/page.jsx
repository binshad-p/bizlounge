import React from "react";
import EasyConnect from "@/components/EasyConnect";

import Banner from "@/containers/Services/Banner";
import TabSection from "@/containers/Services/TabSection";

const page = () => {
  return (
    <div className="pt-[6.8rem] flex flex-col">
      {/* //header */}
      <Banner />
      <TabSection />

      <div className="padding-x pb-[5rem]">
        <EasyConnect />
      </div>
    </div>
  );
};

export default page;
