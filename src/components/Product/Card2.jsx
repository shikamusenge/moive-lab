import React from "react";
import { FaCartPlus } from "react-icons/fa";
const Card2 = ({ title, detail, urlImage }) => {
  return (
    <div
      id="home"
      className="text-white h-fit  bg-slate-800 w-[270PX] rounded-lg shadow-md shadow-slate-500"
    >
      <div className="p-2 font-semibold capitalize">{title}</div>
      <p className="mx-4 font-light">{detail}</p>
      <div>
        <img src={urlImage} className="md:w-[200px]" />
      </div>
      <div className="flex overflow-hidden justify-end">
        <span className="bg-cyan-600 w-fit rounded-lg p-2">
          <FaCartPlus />
        </span>
      </div>
    </div>
  );
};

export default Card2;
