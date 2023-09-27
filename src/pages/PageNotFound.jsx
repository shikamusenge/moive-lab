import React from "react";
import { FaRegFaceAngry } from "react-icons/fa6";
const PageNotFound = () => {
  return (
    <div className="flex items-center flex-col py-8 h-screen">
      <div className=" text-[70px] font-extrabold">
        <span className="text-blue-900">4</span>
        <span className="text-blue-600">0</span>
        <span className="text-blue-800">4</span>
      </div>
      <div className="text-[40px] flex items-center text-blue-950">
        <span className=" animate-bounce  text-red-600  text-[70px]">
          {" "}
          <FaRegFaceAngry />{" "}
        </span>
        ! Page not found
      </div>
    </div>
  );
};

export default PageNotFound;
