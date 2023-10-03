import React from "react";
import { FaSquare } from "react-icons/fa";
const Dotes = ({ cols = 5, rows = 3, color = "orange-600" }) => {
  return (
    <div className={`w-fit absolute text-[5px] text-${color}`}>
      {Array.from(Array(rows), (a) => {
        return (
          <div className="flex gap-1 mb-[4px]">
            {Array.from(Array(cols), (a) => (
              <FaSquare />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Dotes;
