import { certificate, certificate_blue } from "/assets";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const CompanyFormationTypes = () => {
  return (
    <div className="grid grid-cols-3 gap-10    w-full padding-x absolute -bottom-[16rem]  z-10 sm:max-lg:grid-cols-1 max-sm:grid-cols-1 sm:max-lg:relative sm:max-lg:bottom-0 sm:max-lg:my-10 sm:max-lg:gap-5 max-sm:relative max-sm:bottom-0 max-sm:mt-10 lg:max-2xl:-bottom-[4rem] ">
      <div className="bg-frame1 rounded-md text-white p-10 flex flex-col gap-5 bg-no-repeat bg-cover lg:max-2xl:p-5">
        <div className="flex gap-2 items-center ">
          <Image src={certificate} alt="icon" width={40} height={40} />
          <p className="text-[22px] font-medium">Offshore License</p>
        </div>
        <hr />
        <p className="font-extralight opacity-80">
          Get your offshore license easier with fast business line services.
        </p>
      </div>
      <div className="bg-frame2 rounded-md text-white p-10 flex flex-col gap-5 bg-no-repeat bg-cover lg:max-2xl:p-5">
        <div className="flex gap-2 items-center ">
          <Image src={certificate} alt="icon" width={40} height={40} />

          <p className="text-[22px] font-medium">Mainland License</p>
        </div>
        <hr />
        <p className="font-extralight opacity-80">
          Dubai mainland help businesses to grow and expand in the UAE.
        </p>
      </div>
      <div className="bg-frame3 rounded-md text-black p-10 flex flex-col gap-5  bg-cover lg:max-2xl:p-5">
        <div className="flex gap-2 items-center ">
        <Image src={certificate_blue} alt="icon" width={40} height={40} />
        
          <p className="text-[22px] font-medium">Free Zone License</p>
        </div>
        <hr />
        <p className="font-extralight opacity-80">
          Foreign investors now can take advantage of 100% business ownership.
        </p>
      </div>
    </div>
  );
};

export default CompanyFormationTypes;
