import { our_mission, our_vision } from "@/public/assets";
import Image from "next/image";

const Vision_Mission = () => {
  return (
    <div className="padding-x flex w-full text-white gap-10 py-[5rem] max-sm:flex-col max-sm:py-[1rem] max-sm:pb-[5rem] max-sm:gap-3">
      <div className="bg-frame1 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-lg max-sm:p-4 max-sm:gap-3">
        <div className="flex gap-5 items-center ">
          <Image src={our_vision} alt="our vision" width={50} height={50} />
          <p className="text-2xl font-semibold max-sm:text-lg">Our Vision</p>
        </div>
        <hr></hr>
        <p className="text-sm text-[#e2e2e5]">
          To become the leading partner in providing streamlined document
          clearing and business setup services, enabling entrepreneurs and
          businesses to thrive by eliminating administrative barriers and
          simplifying intricate processes.
        </p>
      </div>
      <div className="bg-frame2 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-md max-sm:p-4 max-sm:gap-3">
        <div className="flex gap-5 items-center">
          <Image src={our_mission} alt="our vision" width={50} height={50} />
          <p className="text-2xl font-semibold max-sm:text-lg">Our Mission</p>
        </div>
        <hr></hr>
        <p className="text-sm text-[#e2e2e5]">
          At Bizlounge Documents Clearing Services, our mission is to simplify
          the document clearing process with expertise, cutting-edge technology,
          and exceptional service. We aim to build trust and long-term
          relationships by ensuring accuracy, efficiency, and compliance for our
          clients.
        </p>
      </div>
    </div>
  );
};

export default Vision_Mission;
