import React from "react";

const BirdCard = ({ image, name, event }) => {
  return (
    <div className="bg-slate-300 w-[30rem] relative m-8 p-4 rounded h-fit">
      <div className="h-[20rem] overflow-hidden">
        <img src={image} alt="" className="h-[20rem] w-full" />
      </div>
      <div className="text-lg font-extrabold">{name}</div>
      <div
        className="bg-blue-800 cursor-pointer text-white rounded-lg p-2 border-4 mr-4 -mt-3 absolute right-0 border-white "
        onClick={event}
      >
        Get new Dog
      </div>
    </div>
  );
};

export default BirdCard;
