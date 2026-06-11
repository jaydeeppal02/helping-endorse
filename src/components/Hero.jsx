import React from "react";
import "./Hero.css";
import Get_started from "./Get_started";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col md:flex-row mt-5 mb-20">
  {/* Image Section */}
  <div className="w-full md:w-1/2 p-2 md:p-12">
    <div className="img-hero w-full h-64 md:min-h-[500px] rounded-lg shadow-2xl"></div>
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-10 p-6 md:p-12">
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-[#6f1d1b] mb-4">
        From posters to online ads – manage everything in one place
      </h1>

      <p className="text-sm md:text-lg italic text-gray-700">
        Helping new businesses endorse their products and services to customers
        while helping customers find the best products and services for their
        needs.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      <button
        className="bg-[#6f1d1b] text-[#edede9] rounded-lg px-6 py-3 cursor-pointer hover:bg-[#edede9] hover:text-[#6f1d1b] transition"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>

      <button
        className="bg-[#edede9] text-[#6f1d1b] rounded-lg px-6 py-3 cursor-pointer hover:bg-[#e6d0d0] transition shadow-2xl"
        onClick={() => navigate("/get_started")}
      >
        Explore More
      </button>
    </div>
  </div>
</div>
  );
};
export default Hero;
