import { home_why_choose_us } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 w-full max-sm:flex-col max-sm:py-[5rem] sm:max-lg:flex-col sm:max-lg:py-[3rem]">
      <div className="w-[50%] max-sm:w-full sm:max-lg:w-full">
        <div className="flex flex-col  ">
          <p className="text-[#9EA9B3] text-sm font-medium">
            WHY CHOOSE BIZLOUNGE
          </p>

          <p className="flex flex-col text-[#2D3845] font-light text-[40px] max-sm:text-2xl sm:max-lg:text-2xl">
            Affordable, Hassle-Free
            <span className="font-semibold">
              Business Setup in the UAE
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-base sm:max-lg:text-base">
            A One-Stop Solution for All Your Business Needs
          </p>
          <p className=" text-[#898A9C] text-[15px] font-light">
            Bizlounge is the trusted choice for entrepreneurs and organizations
            looking to establish or expand their businesses in the UAE. Whether
            it’s navigating the complexities of free zones or mainland company
            formation, we ensure a seamless process tailored to your
            requirements.
          </p>
          <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-base sm:max-lg:text-base">
            Premium Services Without the Premium Costs
          </p>
          <p className=" text-[#898A9C] text-[15px] font-light">
            At Bizlounge, we believe in delivering exceptional services without
            burdening your budget. Our cost-effective, timely, and accurate
            solutions make us the preferred partner for start-ups and
            established businesses alike. Let us handle the setup while you
            focus on growing your business.
          </p>
          <p className=" text-[#898A9C] text-[15px] font-light">
            Contact us today to book your free consultation. Allow us to
            simplify your business journey and deliver results you can trust.
          </p>

          <div>
            <Link href="/contact">
            <button className="bg-primary px-8 py-3 rounded-3xl text-white font-bold">
             Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src={home_why_choose_us}
          alt="About-img"
          width={400}
          height={400}
          unoptimized
          className="h-[400px] w-[400px] object-cover  max-sm:h-[200px] sm:max-lg:w-[100vw]"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
