const WhoWeAre = () => {
  return (
    <div className="padding-x bg-[#F5F8FB] pt-[10rem] pb-[7rem] flex justify-between items-center max-sm:flex-col max-sm:gap-5 max-sm:pt-[5rem] max-sm:pb-[5rem]  sm:max-lg:pt-[3rem] sm:max-lg:pb-[3rem]">
      <div className="flex flex-col  flex-1 max-sm:justify-start w-full ">
        <p className="text-[#9EA9B3] text-sm font-medium">WHO WE ARE</p>
        <p className="flex flex-col text-[#2D3845] font-light text-[40px] max-sm:text-2xl sm:max-lg:text-2xl ">
          Empowering Your Success
          <span className="font-semibold">with Expert Solutions</span>{" "}
        </p>
      </div>
      <p className="flex-1 text-[#898A9C] text-[15px] font-light sm:max-lg:text-sm">
        Bizlounge has been a leading business setup advisor in the UAE, offering
        end-to-end solutions for entrepreneurs and SMEs. We specialize in
        licensing, visa services, and tailored consultancy to ensure a seamless
        business setup experience. With a focus on cost-effective and reliable
        services, we help businesses grow and succeed in the UAE's dynamic
        market.
      </p>
    </div>
  );
};

export default WhoWeAre;
