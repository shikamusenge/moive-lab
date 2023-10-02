import React from "react";
import { FaSadTear } from "react-icons/fa";
const NetworkError = () => {
  return (
    <div className="w-screen h-screen flex justify-center mt-8">
      <div className="grid grid-rows-2 h-fit  bg-slate-200 rounded-lg p-8 gap 2 mx-2">
        <div className="flex items-center gap-2 ">
          <span className="text-[5rem] text-red-600 animate-bounce">
            <FaSadTear />
          </span>
          <p className="text-[30px]  font-bold">Error 🌐</p>
        </div>

        <p className="font-bold flex items-center ">
          🌐! Please check your internet connection and try again
        </p>
      </div>
    </div>
  );
};

export default NetworkError;
