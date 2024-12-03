import { home_why_choose_us, service_logo } from "@/assets";
import EasyConnect from "@/components/EasyConnect";
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
            Free Zone License
          </p>
          <p className="text-sm font-light text-[#898A9C]">
            Home <span>/</span> <span>Free Zone License</span>
          </p>
        </div>
      </div>

      {/* // hero section */}

      <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 w-full">
        <div className="flex-1">
          <div className="flex flex-col gap-4 mt-4">
            <p className=" text-[#2D3845] text-[22px] font-light">
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

      {/* //service list */}

      <div className="bg-[#F5F8FB] py-[7.5rem] padding-x">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="uppercase text-sm text-[#B2B8BF] font-medium text-center">
            Connecting Partners
          </p>

          <p className="flex   font-light text-[40px]">
          We work closely with all &nbsp;
            <span className="font-semibold"> Government Agencies</span>
          </p>
        </div>

        <div className="grid grid-cols-5 gap-10 mt-12">
          <div className="bg-white p-7 rounded-lg flex justify-center items-center">
            <Image
              src={service_logo}
              alt="service logo"
              width={80}
              height={80}
              className="h-20"
            />
          </div>
          <div className="bg-white p-7 rounded-lg flex justify-center items-center">
            <Image
              src={service_logo}
              alt="service logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
