import { counter_data } from "@/constant";

const Counter = () => {
  return (
    <div className="bg-counter_bg padding-x py-[7.5rem]">
      <div className="flex justify-between items-center">
        <p className="flex flex-col text-white font-light text-[40px]">
          Your Trusted Partner in
          <span className="font-semibold">Business and Beyond</span>
        </p>
        <button className="border border-white px-8 py-3 rounded-3xl text-white font-bold">
          Get in Touch!
        </button>
      </div>
      <div className="grid grid-cols-5 gap-24 mt-[60px]">
        {counter_data?.map((item, index) => (
          <div className="flex flex-col justify-center items-center text-white gap-3" key={index}>
            <p className="text-5xl font-bold">{item?.count}</p>
            <p className="text-sm uppercase min-w-max">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
