import React from 'react'
import Image from "next/image";
import { home_why_choose_us } from "@/assets";

const HeroSection = () => {
  return (
    <div>
         <div className="padding-x py-[5rem] flex flex-col justify-between items-center gap-6 w-full max-sm:py-[2rem]">
        <div className="flex justify-between  max-sm:flex-col max-sm:gap-5">
          <div className="w-[50%] max-sm:w-full">
            <div className="flex flex-col gap-4 mt-4">
              <p className=" text-[#2D3845] text-[22px] font-light max-sm:text-lg">
                Offshore Licenses in Dubai: Unlocking Global Growth and
                Flexibility for Your Business
              </p>
              <p className=" text-[#898A9C] text-[15px] font-light">
                UAE Offshore company formation is highly regarded due to its
                strategic location, robust regulatory framework, and
                business-friendly environment. An offshore company is an
                international business entity that offers no tax or low tax
                benefits, making it an attractive option for entrepreneurs and
                investors looking to optimize their financial efficiency. These
                companies provide an ideal structure for business management,
                wealth management, asset protection, and the application of
                smart international investment strategies, offering ease and
                freedom in business operations without the burdensome
                regulations often found in other jurisdictions.
              </p>
              <p className=" text-[#898A9C] text-[15px] font-light">
                Offshore companies in the UAE are registered within the
                country’s legal framework but are permitted to operate outside
                the Emirate, granting them flexibility in terms of business
                conduct and asset movement. This setup is particularly
                advantageous for businesses that do not require a physical
                presence in the UAE but wish to benefit from the country’s
                favorable business climate. Dubai offshore company formation can
                take various forms, including limited liability companies
                (LLCs), limited companies, and limited partnerships, each
                catering to different business needs and strategic goals.
              </p>
            </div>
          </div>

          <div className=" relative ">
            <Image
              src={home_why_choose_us}
              alt="free-zone-img"
              width={400}
              height={400}
              className="h-[400px] w-[400px] object-cover max-sm:h-[200px]"
            />
          </div>
        </div>
        <p className=" text-[#898A9C] text-[15px] font-light">
          One of the key advantages of UAE offshore company formation is the
          confidentiality it offers. There is no public registry of company
          directors or shareholders, which ensures privacy and security for
          business owners. Additionally, offshore companies are not subject to
          the same auditing and accounting requirements as onshore entities,
          further simplifying the administrative processes. With access to the
          UAE’s world-class banking system, companies can easily open corporate
          bank accounts, facilitating global transactions and
          operations.Moreover, UAE offshore companies can enjoy 100% foreign
          ownership, with no requirement for a local sponsor, making it an ideal
          option for international investors. The absence of currency
          restrictions also allows businesses to operate freely on a global
          scale. Overall, UAE offshore company formation provides a strategic
          and efficient solution for businesses looking to leverage the UAE’s
          dynamic economy while maintaining operational flexibility and tax
          advantages.
        </p>
      </div>
    </div>
  )
}

export default HeroSection