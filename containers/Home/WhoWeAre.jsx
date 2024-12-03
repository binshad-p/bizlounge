const WhoWeAre = () => {
  return (
    <div className="padding-x bg-[#F5F8FB] pt-[10rem] pb-[7rem] flex justify-between items-center max-sm:flex-col max-sm:gap-5 max-sm:pt-[2rem] max-sm:pb-[2rem]  ">
      <div className="flex flex-col  flex-1 max-sm:justify-start w-full ">
        <p className="text-[#9EA9B3] text-sm font-medium">WHO WE ARE</p>
        <p className="flex flex-col text-[#2D3845] font-light text-[40px] max-sm:text-xl">
          Empowering Your Success
          <span className="font-semibold">with Expert Solutions</span>{" "}
        </p>
      </div>
      <p className="flex-1 text-[#898A9C] text-[15px] font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took.Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took.
      </p>
    </div>
  );
};

export default WhoWeAre;
