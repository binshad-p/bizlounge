import { home_about_1, home_about_2 } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="padding-x py-[7.5rem] flex justify-between items-center gap-6 max-sm:flex-col-reverse sm:max-lg:flex-col-reverse max-sm:py-[5rem] sm:max-lg:py-[3rem]">
      <div className="flex-1 relative">
        <Image
          src={home_about_1}
          alt="About-img"
          width={570}
          height={570}
          unoptimized
          className="h-[500px] w-[470px] object-cover max-sm:w-[100vw] max-sm:h-[200px] sm:max-lg:w-[100vw]"
        />
        <Image
          src={home_about_2}
          alt="About-img"
          width={370}
          height={370}
          unoptimized
          className="absolute right-10 -bottom-20 h-[300px] w-[370px] object-cover max-sm:hidden lg:max-2xl:hidden sm:max-lg:hidden"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col  flex-1">
          <p className="text-[#9EA9B3] text-sm font-medium">ABOUT BIZLOUNGE</p>

          <h2 className="flex flex-col text-[#2D3845] font-light text-[40px] max-sm:text-2xl sm:max-lg:text-2xl">
            Your Trusted Partner in
            <span className="font-semibold">Business Success</span>{" "}
          </h2>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-base sm:max-lg:text-xl">
            Bizlounge, UAE's trusted business setup expert since 2018, offers
            seamless licensing, visa services, and tailored solutions to help
            businesses thrive.
          </p>
          <p className=" text-[#898A9C] text-[15px] font-light">
            Bizlounge is the leading and most trusted business setup advisor in
            the UAE, providing valuable support to aspiring entrepreneurs and
            SMEs since 2018. Bizlounge has established itself as the one-stop
            shop for companies seeking business solutions.
          </p>
          <p className=" text-[#898A9C] text-[15px] font-light">
            Our services cover every aspect of business setup, from seamless
            licensing processes to customised value-added solutions and visa
            services. we empower companies to promote, sustain and accelerate
            their operations.
          </p>
          <div>
            <Link  href="/about">
            <button className="bg-primary px-8 py-3 rounded-3xl text-white font-bold">
              Explore More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
