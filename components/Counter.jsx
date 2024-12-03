import { counter_data } from "@/constant";

const Counter = () => {
  return (
    <div className="bg-counter_bg padding-x py-[7.5rem] max-sm:py-[2rem]">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5">
        <p className="flex flex-col text-white font-light text-[40px] max-sm:text-xl">
          Your Trusted Partner in
          <span className="font-semibold">Business and Beyond</span>
        </p>
        <button className="border border-white px-8 py-3 rounded-3xl text-white font-bold">
          Get in Touch!
        </button>
      </div>
      <div className="grid grid-cols-5 gap-24 mt-[60px] max-sm:grid-cols-1 max-sm:gap-5 max-sm:mt-[20px]">
        {counter_data?.map((item, index) => (
          <div className="flex flex-col justify-center items-center text-white gap-3" key={index}>
            <p className="text-5xl font-bold max-sm:text-xl">{item?.count}</p>
            <p className="text-sm uppercase min-w-max">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
