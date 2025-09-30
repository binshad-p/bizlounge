import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import { service_contact } from "@/public/assets"
import { BsCheck2Circle } from "react-icons/bs";
import { CircleCheckBig } from "lucide-react";
const About = () => {
    return (
        <div className=" flex  flex-col md:flex-row justify-between  items-center padding-x py-[5rem] sm:py-[1rem] lg:py-[100px]   gap-12">
            <div className=" text-[#2d3845] w-full flex flex-col gap-12">
                <div className=" items-center md:items-start">
                    <h1 className="font-semibold text-[40px] text-left ">Why Choose Us</h1>
                    <p className="text-[#898A9C] text-base  font-light max-w-[90%] md:max-w-[60%] text-left">Bizlounge is a leading business setup and PRO services provider in the UAE. We empower
                        companies by managing complex administrative tasks, ensuring legal compliance, and
                        delivering professional solutions tailored to each business. With years of experience, we have
                        become the trusted choice for entrepreneurs, SMEs, and corporate clients across Dubai, Abu
                        Dhabi, and beyond.
                    </p>
                </div>
                <div className="">

                    <div className="flex items-center gap-2"><CircleCheckBig className="w-6 h-6 text-[#0067da]" /><h1 className="text-[#898A9C] text-[22px] font-light">Professional, reliable, and timely support</h1></div>
                    <div className="flex items-center gap-2"> <CircleCheckBig className="w-6 h-6 text-[#0067da]" /><h1 className="text-[#898A9C] text-[22px] font-light">Seamless compliance with UAE regulations</h1></div>
                    <div className="flex items-center gap-2"><CircleCheckBig className="w-6 h-6 text-[#0067da]" /><h1 className="text-[#898A9C] text-[22px] font-light">Expertise across all administrative and legal processes</h1></div>
                    <div className="flex items-center gap-2"> <CircleCheckBig className="w-6 h-6 text-[#0067da]" /><h1 className="text-[#898A9C] text-[22px] font-light"> Customized solutions for businesses of all sizes</h1></div>

                </div>
            </div>
            <div className=" text-center text-[#2d3845] bg-[#eff2f5]  border-[#E9EAEE] border-[0.8px] text-[30px] font-normal rounded-xl sticky w-[300px] md:w-[440px] ">
                <div className="relative p-6  ">
                    <Image
                        src={service_contact}
                        alt="service_contact"
                        className="w-full  object-cover"
                    />
                    <div className="flex justify-center -mt-6">
                        <div className="bg-red-500 p-3 rounded-full shadow-lg">
                            <BiSolidPhoneCall className="  " />
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col">
                        <h1 className="mt-6 text-2xl font-semibold min-w-max">Have any Question?<br className="md:hidden" /> Call As</h1>

                        <h3 className="text-[18px] font-medium">+91123456789</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About