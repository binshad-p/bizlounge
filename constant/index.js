import {
  home_bg,
  home_bg_1,
  home_bg_2,
  home_bg_3,
  icon_1,
  icon_10,
  icon_13,
  icon_14,
  icon_15,
  icon_16,
  icon_17,
  icon_18,
  icon_19,
  icon_2,
  icon_20,
  icon_21,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  main_land_service_icon_blue_1,
  main_land_service_icon_blue_2,
  main_land_service_icon_blue_3,
  main_land_service_icon_blue_4,
  main_land_service_icon_white_1,
  main_land_service_icon_white_2,
  main_land_service_icon_white_3,
  main_land_service_icon_white_4,
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
  service_icon_blue_1,
  service_icon_blue_2,
  service_icon_blue_3,
  service_icon_blue_4,
  service_icon_blue_5,
  service_icon_blue_6,
  service_icon_blue_7,
  service_icon_blue_8,
  service_icon_white_1,
  service_icon_white_2,
  service_icon_white_3,
  service_icon_white_4,
  service_icon_white_5,
  service_icon_white_6,
  service_icon_white_7,
  service_icon_white_8,
  serviceslogo1,
  serviceslogo2,
  serviceslogo3,
  serviceslogo4,
  serviceslogo5,
  serviceslogo6,
  serviceslogo7,
  serviceslogo8,
  serviceslogo9,
} from "@/public/assets";
import { FaPassport, FaFileInvoiceDollar, FaFileArchive, FaShieldAlt, FaCar, FaHospitalAlt } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { MdSupportAgent, MdLocationCity } from "react-icons/md";

export const home_hero_data = [
  {
    id: 1,
    image: home_bg,
    title: "Launch your business with Bizlounge.",
    desc: "Start your business effortlessly in the UAE with our expert setup services. We guide you through every step for a smooth launch.",
  },
  {
    id: 2,
    image: home_bg_3,
    title: "Get your golden visa in the land of golden opportunities",
    desc: "Unlock long-term residency in the UAE with our Golden Visa services. We simplify the application process for you.",
  },
  {
    id: 3,
    image: home_bg_2,
    title: "Unlock your UAE journey with our Expert Visa Services",
    desc: "Navigate the UAE visa process with ease. Our tailored services ensure quick and hassle-free solutions.",
  },
  {
    id: 4,
    image: home_bg_1,
    title: "Our Expert PROs drive your success with excellence.",
    desc: "Let our PRO team handle all your government and legal tasks. We ensure compliance while you focus on growth.",
  },
];

export const home_service_data = [
  {
    id: 1,
    image: service_icon_blue_1,
    image1: service_icon_white_1,
    title: "Company Formation",
    desc: "Helping establish a new company, from registration to compliance.",
    tab_value: "comapany_formation",
  },
  {
    id: 2,
    image: service_icon_blue_3,
    image1: service_icon_white_3,
    title: "Visa Services",
    desc: "Expert assistance with visa applications and immigration.",
    tab_value: "visa_services",
  },
  {
    id: 3,
    image: service_icon_blue_2,
    image1: service_icon_white_2,
    title: "Pro Services",
    desc: "Professional support for government processes and documentation.",
    tab_value: "pro_services",
  },
  {
    id: 4,
    image: service_icon_blue_6,
    image1: service_icon_white_6,
    title: "Documents Attestation ",
    desc: "Ensuring your documents are legally verified and recognized internationally.",
    tab_value: "document_attestation",
  },
  {
    id: 5,
    image: service_icon_blue_5,
    image1: service_icon_white_5,
    title: " Translation Services",
    desc: " Providing accurate translation of documents across multiple languages",
    tab_value: "document_attestation",
  },
  {
    id: 6,
    image: service_icon_blue_4,
    image1: service_icon_white_4,
    title: "Trade Mark Registration",
    desc: "Helping businesses protect their brand by registering trademarks",
    tab_value: "trademark_registration",
  },

  {
    id: 7,
    image: service_icon_blue_7,
    image1: service_icon_white_7,
    title: " Bank Account Opening",
    desc: "Facilitating the opening of corporate and personal bank accounts.",
    tab_value: "comapany_formation",
  },
  {
    id: 8,
    image: service_icon_blue_8,
    image1: service_icon_white_8,
    title: "Company liquidation ",
    desc: "Assisting with the legal process of dissolving and liquidating a company.",
    tab_value: "comapany_formation",
  },
];
export const mainland_service_data = [
  {
    id: 1,
    image: main_land_service_icon_blue_1,
    image1: main_land_service_icon_white_1,
    title: "Commercial Trade License",
    desc: "Investors who are willing to start a trading business in Dubai need to have a commercial license that will be issued by the Department of Economic Development (DED). Only once they get the license will they be able to buy and sell the goods in United Arab Emirates jurisdiction and start a business formation in Dubai.",
  },
  {
    id: 2,
    image: main_land_service_icon_blue_3,
    image1: main_land_service_icon_white_2,

    title: "Industrial Trade License ",
    desc: "If you have a business of industrial manufacturing and are planning to set up an industry in Dubai that will help you expand your business from east to west then the essential thing is the industrial trade license. Having a physical presence of your business in the emirates is mandatory for availing of this license. Production, collection, packaging, etc are some of the activities under this license.",
  },
  {
    id: 3,
    image: main_land_service_icon_blue_4,
    image1: main_land_service_icon_white_3,
    title: "Professional License",
    desc: "Professional licenses are those licenses which act as a legal go-ahead sign to start your business in the emirates. Any professional who wants to do the business of carpentry, consultancy services, or any artist who wants to monetize his art, this license will let you do it.",
  },
  {
    id: 4,
    image: main_land_service_icon_blue_2,
    image1: main_land_service_icon_white_4,
    title: "Tourism License",
    desc: "The graph of the tourism business in Dubai is inching towards the north every year and so is the demand for the tourism license. If you want to start a business in tourism it is mandatory to have its license which is of three types inbound, outbound and travel agency as a travel agent.",
  },
];

export const counter_data = [
  {
    id: 1,
    count: "500 +",
    title: "Trusted Clients ",
  },

  {
    id: 3,
    count: "8 +",
    title: "Experience ",
  },
  {
    id: 4,
    count: "88 +",
    title: "Service Providing ",
  },
  {
    id: 5,
    count: "100 %",
    title: "Customer satisfaction ",
  },
];

export const LinkedWithData = [
  { image: serviceslogo1 },
  { image: serviceslogo2 },
  { image: serviceslogo3 },
  { image: serviceslogo4 },
  { image: serviceslogo5 },
  { image: serviceslogo6 },
  { image: serviceslogo7 },
  { image: serviceslogo8 },
  { image: serviceslogo9 },
];

export const serviceData1 = [
  {
    id: "1",
    image: service_1,
    title: "Company Formation",
    Description:
      "At Bizlounge, we provide expert company formation services in the UAE, including Mainland, Free Zone, and Offshore setups. Our team ensures a smooth process, handling all legal and licensing requirements. Benefit from full ownership, tax exemptions, and access to global markets. Let us help you establish your business efficiently and compliantly in the UAE.",
    subService: [
      {
        sub_service: "Main Land Company Formation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Main Land Company Formation",
      },
      {
        sub_service: "Free Zone Company Formation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Free Zone Company Formation",
      },
      {
        sub_service: "Offshore Company Formation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Offshore Company Formation",
      },
    ],
  },
];

export const serviceData2 = [
  {
    id: "2",
    image: service_2,
    title: "Visa Services",
    Description:
      "we offer a range of visa services to meet your personal and business needs in the UAE. Our services include Golden Visa, Investor/Partner Visa, Employment Visa, Family Visa, Domestic Worker Visa, Tourist Visa, Virtual Work Visa, and Mission Visa. We handle all application processes, ensuring quick and hassle-free approvals. Trust us to assist you with securing the right visa for your UAE journey.",

    subService: [
      {
        sub_service: "Golden Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Golden Visa Services",
      },
      {
        sub_service: "Investor Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Investor Visa Services",
      },
      {
        sub_service: "Employment Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Employment Visa Services",
      },
      {
        sub_service: "Family Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Family Visa Services",
      },
      {
        sub_service: "Domestic Worker Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Domestic Worker Visa Services",
      },
      {
        sub_service: "Tourist Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Tourist Visa Services",
      },
      {
        sub_service: "Virtual Work Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Virtual Work Visa Services",
      },
      {
        sub_service: "Mission Visa Services",
        whatsappMessage:
          "Hi Bizlounge,I want to enquire about Mission Visa Services",
      },
    ],
  },
];
export const serviceData3 = [
  {
    id: "3",
    image: service_3,
    title: "PRO Services",
    Description:
      "We offer a wide range of PRO services to help businesses manage their legal and administrative tasks in the UAE. Our services include Labour & Immigration Department assistance, Local Agent support, Company Bank Account opening, VAT and Corporate Tax Registration, Company Liquidation, Municipality Approvals, and Health & Vehicle Insurance. With our professional guidance, we ensure seamless compliance and smooth operations, allowing you to focus on growing your business in the UAE.",
    subService: [
      {
        sub_service: "Labour & Immigration Department Services",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Labour & Immigration Department Services",
      },
      {
        sub_service: "Local Agent Assistance",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Local Agent Assistance",
      },
      {
        sub_service: "Company Bank Account Opening Assistance",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Company Bank Account Opening Assistance",
      },
      {
        sub_service: "VAT and Corporate Tax Registration",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about VAT and Corporate Tax Registration",
      },
      {
        sub_service: "Company Liquidation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Company Liquidation",
      },
      {
        sub_service: "Municipality Approvals",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Municipality Approvals",
      },
      {
        sub_service: "Health and Vehicle Insurance Services",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Health and Vehicle Insurance Services",
      },
    ],
  },
];
export const serviceData4 = [
  {
    id: "4",
    image: service_4,
    title: "Document Attestation & Translation Services",
    Description:
      "We provide professional Document Attestation & Translation Services to ensure your documents are legally recognized in the UAE. Our services include Commercial Certificate Attestation, Educational Certificate Attestation, Personal Certificate Attestation, and Legal and Certified Translation. We ensure quick and reliable processing, making sure your documents meet all necessary legal requirements for use in the UAE. Trust us to handle your attestation and translation needs efficiently and accurately.",
    subService: [
      {
        sub_service: "Commercial Certificate Attestation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Commercial Certificate Attestation",
      },
      {
        sub_service: "Educational Certificate Attestation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Educational Certificate Attestation",
      },
      {
        sub_service: "Personal Certificate Attestation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Personal Certificate Attestation",
      },
      {
        sub_service: "Legal and Certified Translation",
        whatsappMessage:
          "Hi Bizlounge, I want to enquire about Legal and Certified Translation",
      },
    ],
  },
];
export const serviceData5 = [
  {
    id: "4",
    image: service_5,
    title: "Trade Mark Registration",
    Description:
      "Bizlounge offers expert Trademark Registration services to help protect your brand and intellectual property in the UAE. Our team guides you through the entire process, from trademark search and application to registration, ensuring that your brand is legally safeguarded. With our deep understanding of UAE trademark laws, we ensure a smooth and efficient registration process, helping you secure exclusive rights to your brand. Protect your business identity and enhance your market presence with Bizlounge’s Trademark Registration services.",
    subService: [],
  },
];

export const freezoneServiceData = [
  { image: icon_1 },
  { image: icon_2 },
  { image: icon_3 },
  { image: icon_4 },
  { image: icon_5 },
  { image: icon_6 },
  { image: icon_7 },
  { image: icon_8 },
  { image: icon_9 },
  { image: icon_10 },
  { image: icon_13 },
  { image: icon_14 },
  { image: icon_15 },
  { image: icon_16 },
  { image: icon_17 },
  { image: icon_18 },
  { image: icon_19 },
  { image: icon_20 },
  { image: icon_21 },
];

export const TestmonialData = [
  {
    name: "Mithun Radhakrishnan",
    review:
      "BIZLOUNGE Documents Clearing Services Co. in Dubai offers exceptional service with professionalism and precision. They’re highly prompt in attending clients, providing clear proposals, and completing tasks efficiently. Affordable pricing and smooth execution make them a top choice for document services. Highly recommended for hassle free support…!!",
  },
  {
    name: "Wafa",
    review: "I just wanted to say a big thank you to the team at Biz Lounge for the way they handled my immigration process. Everything was clear, smooth, and well-organized from start to finish, no confusion, no delays, just efficient and professional service."
  },
  {
    name: "Aniket Kulkarni",
    review: "Bizlounge team helped me in obtaining 10 years golden visa. They helped me in understanding the process, submitting the right documents & solving some issues. They made the process very smooth.",
  },
  {

    name: "kamala jawahar",
    review: "Very confident and cooperative team. Excellent customer service and effective handling of documents and procedures. Highly recommend."
  }, {
    name: "Antony Anglin",
    review: "Bizlounge have taken control of all my business license renewals and my staff visas and quotas and I can honestly say over the 4 years I’ve been operating in Dubai they are by far the best!"
  }
];

export const pro_service_data = [
  {
    id: 1,
    image: service_icon_blue_1,
    icon: FaPassport,
    title: "Labour & Immigration Services",
    desc: "We handle employee visas, residency permits, work permits, and labour contracts efficiently ensuring full compliance with UAE regulations",
    tab_value: "comapany_formation",
  },
  {
    id: 2,
    image: service_icon_blue_3,
    icon: MdSupportAgent,
    title: "Local Agent Assistance",
    desc: "Our team manages all local agent interactions, official communications, and regulatory obligations to streamline your business operations",
    tab_value: "visa_services",
  },
  {
    id: 3,
    image: service_icon_blue_2,
    icon: AiOutlineBank,
    title: "Company Bank Account Opening",
    desc: "We assist with bank selection, documentation, and account setup, ensuring your finances are ready to support business growth",
    tab_value: "pro_services",
  },
  {
    id: 4,
    image: service_icon_blue_6,
    icon: FaFileInvoiceDollar,
    title: "VAT and Corporate Tax Registration",
    desc: "Our experts guide you through VAT and corporate tax registration, filing, and compliance,keeping your business aligned with UAE regulations.",
    tab_value: "document_attestation",
  },
  {
    id: 5,
    image: service_icon_blue_4,
    icon: FaFileArchive,
    title: "Company Liquidation",
    desc: "We provide professional support for company closure, handling all legal, financial, and regulatory requirements efficiently",
    tab_value: "trademark_registration",
  },

  {
    id: 6,
    image: service_icon_blue_7,
    icon: MdLocationCity,
    title: " Municipality Approvals",
    desc: "From approvals to permits, we manage interactions with local municipal authorities to ensure your operations comply with regulation",
    tab_value: "comapany_formation",
  },
  {
    id: 7,
    image: service_icon_blue_8,
    icon: FaShieldAlt,
    title: "Health & Vehicle Insurance Services ",
    desc: "We help businesses secure mandatory employee health insurance and vehicle insurancepolicies, ensuring compliance and protection",
    tab_value: "comapany_formation",
  },
];