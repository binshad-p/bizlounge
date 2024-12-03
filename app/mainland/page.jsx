import { home_why_choose_us } from "@/assets";
import EasyConnect from "@/components/EasyConnect";
import { home_service_data, mainland_service_data } from "@/constant";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
      {/* //header */}
      <div className="bg-[#F5F8FB] padding-x py-[55px] flex items-center gap-5 ">
        <div className="bg-primary h-20 w-1"></div>
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-medium text-[#1D2143]">
            Mainland License
          </p>
          <p className="text-sm font-light text-[#898A9C]">
            Home <span>/</span> <span>Mainland License</span>
          </p>
        </div>
      </div>

      {/* // hero section */}

      <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 w-full">
        <div className="flex-1">
          <div className="flex flex-col gap-4 mt-4">
            <p className=" text-[#2D3845] text-[22px] font-light">
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

        <div className="flex-1 relative ">
          <Image
            src={home_why_choose_us}
            alt="free-zone-img"
            width={400}
            height={400}
            className="h-[400px] w-[400px] object-cover "
          />
        </div>
      </div>
      {/* // easyconnect */}
      <div className="padding-x pb-[5rem]">
        <EasyConnect />
      </div>

      {/* // services */}

      <div className="padding-x py-[7.5rem] bg-service_bg flex flex-col justify-center items-center">

      <div className="grid grid-cols-2 gap-12 py-20 px-5">
        {mainland_service_data?.map((item, index) => (
          <div
            className="p-8 flex flex-col gap-6 justify-center items-start bg-[#2D3845] border border-[#404B57] rounded-md cursor-pointer group transition-colors duration-300 hover:bg-primary"
            key={index}
          >
            <div className="w-[85px] h-[85px] rounded-full bg-[#29333F] flex justify-center items-center group-hover:bg-white">
              <Image
                src={item?.image}
                alt={item?.title}
                width={40}
                height={40}
                className="transition-opacity duration-300 hidden group-hover:block"
              />
                <Image
                src={item?.image1}
                alt={item?.title}
                width={40}
                height={40}
                className="transition-opacity duration-300 block group-hover:hidden"

              />
            </div>
            <p className="text-xl font-semibold text-[#FFFFFF] ">
              {item?.title}
            </p>
            <p className="text-sm font-extralight text-[#9FAEBE] ">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
