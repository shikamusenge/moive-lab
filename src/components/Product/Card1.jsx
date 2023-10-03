import React from "react";

const Card1 = ({ name, image }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-3 m-auto">
      <div>{name}</div>
      <div>
        <img src={image} alt={name} className="h-[90px]" />
      </div>
      <div className="text-center text-small bg-cyan-500 -mx-3 -mb-3 rounded-b-lg">
        shop
      </div>
    </div>
  );
};
export default Card1;
