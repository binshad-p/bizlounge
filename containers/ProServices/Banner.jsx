import Image from 'next/image';
import { pro_service_bg } from '@/public/assets';

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={pro_service_bg}
        alt="Pro Service Background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', width: "100%", }}

      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col md:flex-row justify-center md:justify-between items-center text-white  py-6 padding-x ">
        <div className="text-white max-w-xl ">
          {/* Logo */}
          {/* class="bg-white text-black px-[100px] py-5 z-50 w-full font-medium fixed top-0 transition-colors duration-300 max-sm:px-[2rem] lg:max-2xl:px-[5rem] */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[60px]">
            Your Trusted PRO Services Partner in the UAE
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80  mb-6">
            Since 2018, Bizlounge has helped businesses navigate legal, administrative, and regulatory
            requirements in the UAE. From startups to established companies, we provide seamless PRO
            services that let you focus on growth while we handle compliance.
          </p>

        </div>


        {/* Right side - Form */}
        <div className="bg-white rounded-lg shadow-lg p-8  md:w-[530px] w-full mt-10 md:mt-0 ">
          <h2 className="text-[33px]  font-bold text-blue-900 mb-4 leading-[50px] min-w-max">
            Get Free<br className=' md:hidden' /> Consultation
          </h2>
          <form className="flex flex-col gap-4">
            <div className=' w-full py-3'>
              <label className="font-normal text-base text-[#4E4F53] ">Full name *</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full  border-[0.800px] rounded-md  pl-[48px] pr-[15px] py-[15px] outline-none focus:ring-2 border-[#ced4da] text-[black] mt-2"
              />
            </div>
            <div className=''>
              <label className="font-normal text-base text-[#4E4F53]  ">Phone no. *</label>
              <div className="flex gap-1 mt-2">
                <input
                  type="text"
                  defaultValue="+971"
                  className="w-20  border-[0.800px] rounded-l-md  py-[15px] pl-[10px] pr-[15px] outline-none focus:ring-2 border-[#ced4da] text-black text-left"
                />
                <input
                  type="text"
                  placeholder="Phone no."
                  className="flex-1  border-[0.800px] rounded-r-md py-[15px] pl-[48px] pr-[15px] outline-none focus:ring-2 border-[#ced4da] text-[black]"
                />
              </div>
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold">
              Submit
            </button>
          </form>
        </div>


      </div>
    </div>
  )
}

export default Banner