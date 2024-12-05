import React from 'react'
import { home_why_choose_us,  } from "@public/assets";
import Image from "next/image";

const HeroSection = () => {
  return (

    <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 w-full max-sm:flex-col max-sm:py-[5rem] sm:max-lg:flex-col sm:max-lg:py-[3rem]">
    <div className="w-[50%] max-sm:w-full sm:max-lg:w-full">
      <div className="flex flex-col gap-4 mt-4">
        <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-lg">
          Unlike other licenses in Dubai, Freezone company registration
          Dubai is completely different and is far more beneficial for the
          foreign investors as they can avail 100 percent ownership of their
          business if it is set up in the Dubai freezone area.{" "}
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          In addition to that, there are other added benefits as well like
          complete tax exemptions, 100 percent repatriation benefits, and
          absence of the foreign exchange restrictions.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          It is a perfect choice for foreign investors who are looking for a
          free zone company registration in  Dubai, it has more than 42 free
          zones housing a plethora of companies with separate jurisdictions
          and these freezones are increasing with the passing day because of
          the rise in the demand.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          When the company is approved for the free zone business it is
          given any of the licenses such as trade, service, industrial, or
          even national industrial by the free zone authority.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          These licenses can be renewed annually. Your business should match
          to the category of the preferred freezone and you are supposed to
          select your desired freezone jurisdiction based on the genre
          of business.{" "}
        </p>
        <div></div>
      </div>
    </div>

    <div className=" relative ">
      <Image
        src={home_why_choose_us}
        alt="free-zone-img"
        width={400}
        height={400}
        className="h-[400px] w-[400px] object-cover max-sm:h-[200px] sm:max-lg:w-[100vw]"
      />
    </div>
  </div>  )
}

export default HeroSection