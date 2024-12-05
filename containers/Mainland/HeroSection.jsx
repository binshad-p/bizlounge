import React from 'react'
import { home_why_choose_us } from "@public/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="padding-x py-[5rem] flex justify-between items-center gap-6 w-full max-sm:flex-col max-sm:py-[5rem] sm:max-lg:flex-col sm:max-lg:py-[3rem]">
    <div className="w-[50%] max-sm:w-full sm:max-lg:w-full">
      <div className="flex flex-col gap-4 mt-4">
        <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-lg">
          Dubai mainland license helps a company reap the maximum benefits
          i.e. mainland company formation in Dubai can grow and expand its
          business in Dubai.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          According to the rules of Dubai, a mainland company has a
          provision to run its business without any interruption in the
          geographical area which is commercialized and comes under the
          Emirati jurisdiction. These rules and policies are amended by the
          government that administers the operation of all mainland
          companies in the United Arab Emirates.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          All the business entities which come under the commercial,
          professional, and sole established registered under the Dubai
          Economic Department (DED) are termed are Dubai Mainland License.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          The company corporation law in Dubai mandates that 51 percent of
          the total share of the commercial company should be necessitated
          to UAE national and the remaining should go to the foreign
          national and this is the rule which applies to all sorts of
          business in the UAE mainland.
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          Having an appropriate license is a prerequisite for a mainland
          company formation in Dubai, without which you are not permitted to
          do the work. Fast Business Line will help you in getting different
          kinds of license based on the type of business your company is
          into the
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
  </div>
  )
}

export default HeroSection