import React from 'react'

const Banner = () => {
  return (
    <div className="bg-[#F5F8FB] padding-x py-[55px] flex items-center gap-5 ">
    <div className="bg-primary h-20 w-1"></div>
    <div className="flex flex-col gap-3">
      <p className="text-4xl font-medium text-[#1D2143]">Services</p>
      <p className="text-sm font-light text-[#898A9C]">
        Home <span>/</span> <span>Services</span>
      </p>
    </div>
  </div>
  )
}

export default Banner