import React from "react";
const Card = ({ name, age }) => {
  return (
    <div className="border shadow-md shadow-slate-800 bg-slate-300 rounded p-4 h-fit w-[14rem] m-4 ">
      <p>Hello,</p>
      <p>
        My Name is <b>{name}</b>
      </p>
      <p>
        I am <b>{age}</b> years old
      </p>
    </div>
  );
};

export default Card;
