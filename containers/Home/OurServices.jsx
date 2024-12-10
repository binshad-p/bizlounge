import { home_service_data } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="padding-x py-[7.5rem] bg-service_bg flex flex-col justify-center items-center max-sm:py-[5rem] bg-no-repeat bg-cover">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5">
        <div className="flex-1 max-sm:w-full ">
          <p className="text-[#9EA9B3] text-sm font-medium">OUR SERVICES</p>

          <p className="flex flex-col text-white font-light text-[40px] max-sm:text-2xl max-sm:items-start sm:max-lg:text-2xl">
            Comprehensive Solutions
            <span className="font-semibold">for Your Every Need</span>
          </p>
        </div>
        <p className="text-[#A1A2B4] font-light flex-1 sm:max-lg:text-base">
          At Bizlounge, we offer a wide range of business setup and support
          services to help entrepreneurs and companies establish, grow, and
          manage their operations in the UAE. Our services are designed to
          streamline every step of your business journey, ensuring a hassle-free
          experience from start to finish.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-12 py-20 px-5 max-sm:grid-cols-1 sm:max-lg:grid-cols-2 max-sm:px-1 max-sm:py-10 max-sm:gap-6 lg:max-2xl:gap-6 lg:max-2xl:px-0">
        {home_service_data?.map((item, index) => (
          <div
            className="py-8 flex flex-col gap-6 justify-center items-center border border-[#404B57] rounded-md cursor-pointer group transition-colors duration-300 hover:bg-primary"
            key={index}
            onClick={() => {
              const encodedMessage = encodeURIComponent(
                `Hi Bizlounge, I want to enquire about ${item?.title}`
              );
              window.open(
                `https://wa.me/971544702611?text=${encodedMessage}`,
                "_blank"
              );
            }}
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
            <p className="text-xl font-semibold text-[#FFFFFF] lg:max-2xl:text-base">
              {item?.title}
            </p>
            <p className="text-sm font-extralight text-[#9FAEBE] text-center">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      <Link href="/services">
        <button className="border border-white px-8 py-4 rounded-[50px] text-white font-semibold">
          Explore All Services
        </button>
      </Link>
    </div>
  );
};

export default OurServices;
