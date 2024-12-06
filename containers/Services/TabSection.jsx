import React from 'react'
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { serviceData1, serviceData2, serviceData3, serviceData4, serviceData5 } from "@/constant";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { home_bg } from '@/public/assets';
import Link from 'next/link';

const TabSection = () => {
  return (
    <div className="padding-x my-[5rem] sm:max-lg:my-[3rem] max-sm:my-[2rem] ">
        <Tabs
          defaultValue="comapany_formation"
          className=" flex gap-[60px] items-start max-sm:gap-5"
        >
          <TabsList className="flex flex-col  ">
            <TabsTrigger
              value="comapany_formation"
              className="flex !justify-between max-sm:text-left"
            >
              Company Formation{" "}
            </TabsTrigger>
            <TabsTrigger
              value="visa_services"
              className="flex !justify-between max-sm:text-left"
            >
              Visa Services{" "}
            </TabsTrigger>
            <TabsTrigger value="pro_services" className="flex !justify-between max-sm:text-left">
              {" "}
              PRO Services
            </TabsTrigger>
      
            <TabsTrigger
              value="document_attestation"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Document Attestation &
              <br className=' max-sm:block hidden'/> 
              Translation Services
            </TabsTrigger>
         
            <TabsTrigger
              value="trademark_registration"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Trade Mark <br className=' max-sm:block hidden'/> Registration
            </TabsTrigger>
        
          </TabsList>

          <TabsContent value="comapany_formation">
            {serviceData1?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={item?.image}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold max-sm:text-xl">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light sm:max-lg:text-justify max-sm:text-sm">{item?.Description}</p>

                <div className="flex flex-col gap-4">
                  {item?.subService.map((value, index) => (
                    <Link href={value?.link}> <p
                    className="flex items-center gap-2 text-[#898A9C] font-light"
                    key={index}
                  >
                    {" "}
                    <CircleCheckBig color="#0067DA" />
                    <span  className=' max-sm:text-sm'>{value?.sub_service}</span>
                  </p></Link>
                   
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="visa_services">
            {serviceData2?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={item?.image}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold max-sm:text-xl">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light sm:max-lg:text-justify max-sm:text-sm">{item?.Description}</p>

                <div className="flex flex-col gap-4">
                  {item?.subService.map((value, index) => (
                    <p
                      className="flex items-center gap-2 text-[#898A9C] font-light"
                      key={index}
                    >
                      {" "}
                      <CircleCheckBig color="#0067DA" />
                      <span  className=' max-sm:text-sm'>{value?.sub_service}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="pro_services">
            {serviceData3?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={item?.image}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold max-sm:text-xl">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light max-sm:text-sm max-sm:text-justify">{item?.Description}</p>

                <div className="flex flex-col gap-4">
                  {item?.subService.map((value, index) => (
                    <p
                      className="flex items-center gap-2 text-[#898A9C] font-light"
                      key={index}
                    >
                      {" "}
                      <CircleCheckBig color="#0067DA" />
                      <span>{value?.sub_service}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="document_attestation">
            {serviceData4?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={item?.image}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold max-sm:text-xl">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light max-sm:text-sm">{item?.Description}</p>

                <div className="flex flex-col gap-4">
                  {item?.subService.map((value, index) => (
                    <p
                      className="flex items-center gap-2 text-[#898A9C] font-light"
                      key={index}
                    >
                      {" "}
                      <CircleCheckBig color="#0067DA" />
                      <span>{value?.sub_service}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="trademark_registration">
            {serviceData5?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={item?.image}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold max-sm:text-xl">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light max-sm:text-sm">{item?.Description}</p>

                <div className="flex flex-col gap-4">
                  {item?.subService.map((value, index) => (
                    <p
                      className="flex items-center gap-2 text-[#898A9C] font-light"
                      key={index}
                    >
                      {" "}
                      <CircleCheckBig color="#0067DA" />
                      <span>{value?.sub_service}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
  )
}

export default TabSection