import { our_mission, our_vision } from "/assets";
import Image from "next/image";

const Vision_Mission = () => {
  return (
    <div className="padding-x flex w-full text-white gap-10 py-[5rem] max-sm:flex-col max-sm:py-[1rem] max-sm:pb-[5rem] max-sm:gap-3">
        <div className="bg-frame1 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-lg max-sm:p-4 max-sm:gap-3">
          <div className="flex gap-5 items-center ">
            <Image src={our_vision} alt="our vision" width={50} height={50}/>
            <p className="text-2xl font-semibold max-sm:text-lg">Our Vision</p>
          </div>
          <hr></hr>
          <p className="text-sm text-[#e2e2e5]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className="bg-frame2 p-8 flex flex-col gap-5 bg-no-repeat flex-1 bg-cover rounded-md max-sm:p-4 max-sm:gap-3">
          <div className="flex gap-5 items-center">
            <Image src={our_mission} alt="our vision" width={50} height={50}/>
            <p className="text-2xl font-semibold max-sm:text-lg">Our Mission</p>
          </div>
          <hr></hr>
          <p className="text-sm text-[#e2e2e5]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
      </div>
  )
}

export default Vision_Mission