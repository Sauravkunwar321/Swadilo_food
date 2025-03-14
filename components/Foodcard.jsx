import { FaStar } from "react-icons/fa";
import React from "react";

const Foodcard = ({  img, name, price, desc, rating }) => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt="pizza"
        className="w-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out bg-white overflow-hidden"
      />

      <div className="flex flex-row text-sm justify-between">
        <h2> {name}</h2>
        <span className="text-green-500">रु{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0,50)+"..."}</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center ">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button className="p-1 text-white bg-green-500 hover: bg-green-600 rounded-lg text-sm cursor-pointer ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
