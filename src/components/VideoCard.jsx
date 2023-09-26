import React from "react";

function VideoCard({ image, name }) {
  return (
    <div className="relative bg-blue-600 w-fit transition-all hover:opacity-[0.8] rounded-sm">
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${image}`}
          alt=""
          className="w-[11rem] h-[20rem]"
        />
      </div>
      <div className="absolute bottom-0 text-center py-2 text-white w-[11rem] opacity-[0.7] bg-slate-600 font-bold cursor-pointer duration-1000 ease-in-out hover:mt-[4px]">
        {name}
      </div>
    </div>
  );
}

export default VideoCard;
