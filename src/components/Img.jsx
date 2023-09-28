import React from "react";

const Img = ({ url, detail }) => {
  return (
    <div className="h-fit w-fit p-3 rounded-md relative">
      <div>
        <img src={url} className="w-[8rem] h-[12rem]" />
      </div>
      <div className="absolute m-0 w-[8rem] opacity-[0.7] bg-black text-white text-2xl">
        {detail}
      </div>
    </div>
  );
};

export default Img;
