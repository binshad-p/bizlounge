import { pro_service_data } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation hook

const OurProService = () => {
  const router = useRouter();


  return (
    <div className="  bg-service_bg flex flex-col justify-center items-center  bg-no-repeat bg-cover padding-x md:py-[3rem] py-[2rem] lg:py-[100px]">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5">
        <div className="flex-1 max-sm:w-full ">
          <p className="text-[#9EA9B3] text-sm font-medium">OUR SERVICES</p>

          <h2 className="flex flex-col text-white font-light text-[40px] max-sm:text-2xl max-sm:items-start sm:max-lg:text-2xl">
            Comprehensive Solutions
            <span className="font-semibold">for Your Every Need</span>
          </h2>
        </div>
        <p className="text-[#A1A2B4] font-light flex-1 sm:max-lg:text-base">
          We offer comprehensive PRO services designed to make your business operations smooth and
          stress-free. Our expertise covers every critical aspect:
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 py-20 px-5 max-sm:grid-cols-1 sm:max-lg:grid-cols-2 max-sm:px-1 max-sm:py-10 max-sm:gap-6 lg:max-2xl:gap-6 lg:max-2xl:px-0">
        {pro_service_data?.map((item, index) => (
          <div
            className="py-8 px-4 flex flex-col gap-6 justify-center items-center border border-[#404B57] rounded-md cursor-pointer group transition-colors duration-300 hover:bg-[#1d4ed8]"
            key={index}
          >
            <div className="w-[85px] h-[85px] rounded-full bg-[#29333F] flex justify-center items-center group-hover:bg-white ">
              <div className="transition-opacity duration-300 hidden group-hover:block">
                {item.icon && <item.icon size={40} className="text-[#1d4ed8]" />}
              </div>
              <div className="block group-hover:hidden text-white">
                {item.icon && <item.icon size={40} />}
              </div>
            </div>
            <p className="text-xl font-semibold text-[#FFFFFF] lg:max-2xl:text-base text-center">
              {item?.title}
            </p>
            <p className="text-sm font-extralight text-[#9FAEBE] text-center">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
 
    </div>
  );
};

export default OurProService;
