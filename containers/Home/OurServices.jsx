import { home_service_data } from "@/constant";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="padding-x py-[7.5rem] bg-service_bg flex flex-col justify-center items-center max-sm:py-[2rem] bg-no-repeat bg-cover">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5">
        <div className="flex-1 max-sm:w-full ">
          <p className="text-[#9EA9B3] text-sm font-medium">Our Services</p>

          <p className="flex flex-col text-white font-light text-[40px] max-sm:text-xl max-sm:items-start ">
            Comprehensive Solutions
            <span className="font-semibold">for Your Every Need</span>
          </p>
        </div>
        <p className="text-[#A1A2B4] font-light flex-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1400s, when an unknown printer took.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-12 py-20 px-5 max-sm:grid-cols-1 max-sm:px-1 max-sm:py-10 max-sm:gap-6">
        {home_service_data?.map((item, index) => (
          <div
            className="py-8 flex flex-col gap-6 justify-center items-center border border-[#404B57] rounded-md cursor-pointer group transition-colors duration-300 hover:bg-primary"
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
            <p className="text-sm font-extralight text-[#9FAEBE] text-center">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      <button className="border border-white px-8 py-4 rounded-3xl text-white font-semibold">
      Explore All Services
      </button>
    </div>
  );
};

export default OurServices;
