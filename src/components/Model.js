import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold"> Model 3</h1>
        <p className="text-sm p-2">
          {" "}
          Order Online for{" "}
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            <span className="underline underline-offset-4 hover:cursor-pointer">
              Touchles Delivery
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
            Custom Order
          </button>
        </a>
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2">
            Existing Inventory
          </button>
        </a>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Model;
