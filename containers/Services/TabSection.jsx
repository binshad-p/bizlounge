import React from 'react'
import Image from "next/image";
import { home_bg } from "/assets";
import { CircleCheckBig } from "lucide-react";
import { serviceData2, serviceData3, serviceData4 } from "@/constant";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabSection = () => {
  return (
    <div className="padding-x my-[5rem] sm:max-lg:my-[3rem] max-sm:my-[2rem] ">
        <Tabs
          defaultValue="visa_services"
          className=" flex gap-[60px] items-start max-sm:gap-5"
        >
          <TabsList className="flex flex-col  ">
            <TabsTrigger
              value="visa_services"
              className="flex !justify-between max-sm:text-left"
            >
              Visa services{" "}
            </TabsTrigger>
            <TabsTrigger value="pro_services" className="flex !justify-between max-sm:text-left">
              {" "}
              PRO services
            </TabsTrigger>
            <TabsTrigger
              value="labour_card_services"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Labour Card  <br className=' max-sm:block hidden'/>services
            </TabsTrigger>
            <TabsTrigger
              value="immigration_Services"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Immigration  <br className=' max-sm:block hidden'/> Services
            </TabsTrigger>
            <TabsTrigger
              value="document_attestation"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Document  <br className=' max-sm:block hidden'/> attestation
            </TabsTrigger>
            <TabsTrigger
              value="translation_services"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Translation services
            </TabsTrigger>
            <TabsTrigger
              value="local_agent_agreement_services"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Local agent <br className=' max-sm:block hidden'/> agreement services
            </TabsTrigger>
            <TabsTrigger
              value="medical_insurance_assistance"
              className="flex !justify-between max-sm:text-left"
            >
              {" "}
              Medical insurance  <br className=' max-sm:block hidden'/> assistance{" "}
            </TabsTrigger>
            <TabsTrigger
              value="bank_account_opening_assistance"
              className="flex !justify-between max-sm:text-left"
            >
              Bank account  <br className=' max-sm:block hidden'/> opening assistance{" "}
            </TabsTrigger>
            <TabsTrigger
              value="company_Liquidation"
              className="flex !justify-between max-sm:text-left"
            >
              Company  <br className=' max-sm:block hidden'/> Liquidation
            </TabsTrigger>
            <TabsTrigger
              value="corporate_tax_assistance"
              className="flex !justify-between max-sm:text-left "
            >
              Vat & corporate  <br className=' max-sm:block hidden'/> tax assistance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visa_services">
            {serviceData2?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={home_bg}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg sm:max-lg:hidden max-sm:hidden"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light sm:max-lg:text-justify">{item?.Description}</p>

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
                  src={home_bg}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold">
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

          <TabsContent value="labour_card_services">
            {serviceData4?.map((item, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <Image
                  src={home_bg}
                  alt="image"
                  width={800}
                  height={400}
                  className="h-[250px] object-cover rounded-lg"
                />
                <h2 className="text-[#2D3845] text-2xl font-semibold">
                  {item?.title}
                </h2>
                <p className="text-[#898A9C] font-light">{item?.Description}</p>

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