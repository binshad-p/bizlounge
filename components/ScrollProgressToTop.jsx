"use client";
import React, { useState, useEffect } from "react";

const ScrollProgressComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const text = "PRESS HERE TO TOP • ";
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progressStroke = (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-32 max-sm:bottom-20 max-sm:right-2 z-50 right-8 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-20 h-20 cursor-pointer group hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to top"
      >
        {/* Outer rotating text */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "10s" }}
        >
          <svg className="w-20 h-20" viewBox="0 0 80 80">
            <defs>
              <path
                id="circle"
                d="M 40, 40 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-[8px] font-semibold fill-blue-600 tracking-wider">
              <textPath href="#circle" startOffset="0%">
                {text.repeat(3)}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <span className="text-xs font-medium text-gray-600 ">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>

        {/* Progress percentage text */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"></div>
      </button>
    </div>
  );
};

export default ScrollProgressComponent;
