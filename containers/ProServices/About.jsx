import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import { service_contact } from "@/public/assets";
import { BsCheck2Circle } from "react-icons/bs";
import { CircleCheckBig } from "lucide-react";
const About = () => {
  return (
    <div className=" flex  flex-col lg:flex-row justify-between  items-center padding-x md:py-[3rem] py-[2rem] lg:py-[100px]   gap-12">
      <div className=" text-[#2d3845] w-full flex flex-col gap-8">
        <div className=" items-center md:items-start ">
          <h2 className="  text-[#2d3845] font-light text-[40px] max-sm:text-2xl max-sm:items-start sm:max-lg:text-2xl mb-5">
            Why Choose {""}
            <span className="font-semibold"> Bizlounge</span>
          </h2>{" "}
          <p className="text-[#2D3845] text-lg  font-light max-w-[90%] md:max-w-full text-left">
            Bizlounge is a leading business setup and PRO services provider in
            the UAE. We empower companies by managing complex administrative
            tasks, ensuring legal compliance, and delivering professional
            solutions tailored to each business. With years of experience, we
            have become the trusted choice for entrepreneurs, SMEs, and
            corporate clients across Dubai, Abu Dhabi, and beyond.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#2D3845] text-lg  font-light max-w-[90%] mb-3 md:max-w-full text-left">
            Choosing Bizlounge means partnering with a trusted expert in PRO
            services. We provide:
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <CircleCheckBig className="w-6 h-6 text-[#0067da]" />
            </div>{" "}
            <h1 className="text-[#898A9C] text-lg font-light">
              Professional, reliable, and timely support
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="flex-shrink-0">
              <CircleCheckBig className="w-6 h-6 text-[#0067da]" />
            </div>{" "}
            <h1 className="text-[#898A9C] text-lg font-light">
              Seamless compliance with UAE regulations
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <CircleCheckBig className="w-6 h-6 text-[#0067da]" />
            </div>{" "}
            <h1 className="text-[#898A9C] text-lg font-light">
              Expertise across all administrative and legal processes
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="flex-shrink-0">
              <CircleCheckBig className="w-6 h-6 text-[#0067da]" />
            </div>{" "}
            <h1 className="text-[#898A9C] text-lg font-light">
              {" "}
              Customized solutions for businesses of all sizes
            </h1>
          </div>
        </div>
      </div>
      <div className=" text-center text-[#2d3845] bg-[#eff2f5]  border-[#E9EAEE] border-[0.8px] text-[30px] font-normal rounded-xl sticky w-full md:w-[440px] ">
        <div className="relative p-6  ">
          <Image
            src={service_contact}
            alt="service_contact"
            className="w-full  object-cover"
          />
          <div className="flex justify-center -mt-6">
            <div className="bg-[#0067da] p-3 rounded-full shadow-lg">
              <BiSolidPhoneCall className=" text-white " />
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <p className="mt-6 text-2xl font-semibold min-w-max">
              Have any Question?
              <br className="md:hidden" /> Call Us At
            </p>

            <p className="text-[18px] font-medium">+971 5447 02611</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
