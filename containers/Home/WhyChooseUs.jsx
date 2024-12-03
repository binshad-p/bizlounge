

import { home_why_choose_us } from "@/assets";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 w-full">
  
      <div className="w-[50%]">
        <div className="flex flex-col  ">
          <p className="text-[#9EA9B3] text-sm font-medium">WHY CHOOSE US</p>

          <p className="flex flex-col text-[#2D3845] font-light text-[40px]">
            Your Trusted Partner in
            <span className="font-semibold">Business and Beyond</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">

        <p className=" text-[#2D3845] text-[22px] font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <p className=" text-[#898A9C] text-[15px] font-light">
          when an unknown printer took.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took.
        </p>
        <div>

        <button className="bg-primary px-8 py-3 rounded-3xl text-white font-bold">
        Explore More
        </button>
        </div>
        </div>
      </div>

      <div className="">
        
        <Image src={home_why_choose_us} alt="About-img" width={400} height={400} className="h-[400px] w-[400px] object-cover " />
    
      </div>
    </div>
  );
};

export default WhyChooseUs;