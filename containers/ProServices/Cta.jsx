import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const CallAction = () => {
  return (
    <div className="padding-x   text-white py-16 px-6  ">
      <div className="flex flex-col text-center gap-6 xl:gap-12  bg-counter_bg bg-right bg    py-16 rounded-xl px-8 ">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] font-semibold">
            
          </h1>
            <h2 className="flex font-light text-[40px] max-sm:text-2xl max-sm:flex-col">
           Contact Us for &nbsp;
          <span className="font-semibold"> PRO Services</span>
        </h2>
          <p className="text-center flex-1   max-w-[60%] font-light ">
            Simplify Your Business Operations Today. Contact Bizlounge for
            Expert PRO Services in the UAE.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center">
                      <Link href="/contact">

          <button className="text-base bg-[#fff] py-4 px-8 rounded-xl text-[#333]">
            Get Started Today
          </button>
          </Link>
          <Link href="/contact">
            <button className="text-base bg-[#1A2D39] py-4 px-8 rounded-xl text-white">
              Schedule Consultation
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
          <div className="flex flex-col items-center space-y-2">
            <FaPhoneAlt className="w-6 h-6" />
            <h1>Call Us</h1>
            <p>+971 5447 02611</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <MdOutlineMail className="w-6 h-6" />
            <h1>Email</h1>
            <p>info@bizloungeglobal.com</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <CiLocationOn className="w-6 h-6" />
            <h1>Location</h1>
            <p>2701,The Exchange Tower, Business Bay, Dubai, UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallAction;
