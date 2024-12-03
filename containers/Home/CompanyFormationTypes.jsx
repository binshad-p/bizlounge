import { ShieldCheck } from "lucide-react";

const CompanyFormationTypes = () => {
  return (
    <div className="grid grid-cols-3 gap-10    w-full padding-x absolute -bottom-24  z-10 ">
      <div className="bg-[#0067DA] rounded-md text-white p-10 flex flex-col gap-5">
        <div className="flex gap-2 items-center ">
          <ShieldCheck size={40}/>

          <p className="text-[22px] font-medium">Offshore License</p>
        </div>
        <hr/>
        <p className="font-extralight opacity-80">Get your offshore license easier with fast business line services.</p>
      </div>
      <div className="bg-[#0067DA] rounded-md text-white p-10 flex flex-col gap-5">
        <div className="flex gap-2 items-center ">
          <ShieldCheck size={40}/>

          <p className="text-[22px] font-medium">Mainland License</p>
        </div>
        <hr/>
        <p className="font-extralight opacity-80">Dubai mainland help businesses to grow and expand in the UAE.</p>
      </div>
      <div className="bg-[#0067DA] rounded-md text-white p-10 flex flex-col gap-5">
        <div className="flex gap-2 items-center ">
          <ShieldCheck size={40}/>

          <p className="text-[22px] font-medium">Free Zone License</p>
        </div>
        <hr/>
        <p className="font-extralight opacity-80">Foreign investors now can take advantage of 100% business ownership.</p>
      </div>
     
    </div>
  );
};

export default CompanyFormationTypes;
