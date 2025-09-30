import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const CallAction = () => {
    return (
        <div className="padding-x   text-white py-16 px-6  ">
            <div className="flex flex-col text-center gap-6 xl:gap-12  bg-gradient-to-r from-[#1a2d39] to-[#8b8b9c] py-16 rounded-xl px-8 ">
                <div className="flex flex-col items-center">
                    <h1 className="text-[40px] font-semibold">Ready To Strated?</h1>
                    <p className="text-center flex-1 text-[#898A9C] text-[15px] max-w-[60%] font-light ">Let Bizlounge handle PRO services while you focus on growing your business.Contact us today for expert assistance with all your UAE business requirements</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-center">
                    <button className="text-base bg-[#0067da] py-4 px-8 rounded-xl text-white">Get Started Today</button><button className="text-base bg-[#0067da] py-4 px-8 rounded-xl text-white">Schedule Consultation</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                    <div className="flex flex-col items-center space-y-2">
                        <FaPhoneAlt className="w-6 h-6" />
                        <h1>Call Us</h1>
                        <p>+971-1122222</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <MdOutlineMail className="w-6 h-6" />
                        <h1>Email</h1>
                        <p>info@bizlounge</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <CiLocationOn className="w-6 h-6" />
                        <h1>Location</h1>
                        <p>Duba,UAE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallAction