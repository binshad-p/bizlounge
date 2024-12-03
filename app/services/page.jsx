import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="pt-[6.8rem]">
    {/* //header */}
    <div className="bg-[#F5F8FB] padding-x py-[55px] flex items-center gap-5 ">
      <div className="bg-primary h-20 w-1"></div>
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-medium text-[#1D2143]">
          Services
        </p>
        <p className="text-sm font-light text-[#898A9C]">
          Home <span>/</span> <span>Services</span>
        </p>
      </div>
    </div>
    <div className="padding-x py-[7.5rem]"> 

      <Tabs defaultValue="account" className=" flex gap-[60px] items-start">

        <TabsList className="flex flex-col  ">
          <TabsTrigger value="account" className="">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
    </div>
  );
};

export default page;
