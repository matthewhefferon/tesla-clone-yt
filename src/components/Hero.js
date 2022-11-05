import React from "react";
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
  return (
   
    <div className="text-center mt-32">
      <div>
        <h1 className="text-4xl font-bold"> Model 3</h1>
        <p className="text-sm p-2">
          {" "}
          Order Online for{" "}
          <span className="underline underline-offset-4">
            Touchles Delivery
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-[750px] text-sm lg:flex-row">
        <button className="rounded-md bg-[#393c41] w-96 md:w-120 mx-0 h-10 md:mx-4 mt-2 text-white">
          Custom Order
        </button>
        <button className="rounded-md bg-[#f4f4f4] w-96 md:w-120 mx-0 h-10 md:mx-4 mt-2">
          Existing Inventory
        </button>
      </div>
      <div className="flex justify-center mt-16 animate-bounce">
        <FiChevronDown size={24} />
      </div>
    </div>
    
  );
};

export default Hero;
