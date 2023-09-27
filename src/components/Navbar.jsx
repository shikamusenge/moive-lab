import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  return (
    <div className="top-0 sticky z-20">
      <nav className=" px-12  items-center grid bg-blue-950 h-[100px] overflow-hidden">
        <div className="p-4 flex justify-between text-white items-center h-full">
          <div className="text-white text-2xl flex justify-center items-center font-extrabold">
            <img src="/logo.png" alt="" className="h-20" />{" "}
            <span className="animate-bounce">Movie Libirary</span>
          </div>
          <div className="flex gap-4">
            <Link to="/" className=" hover:text-red-800">
              Browser
            </Link>
            <Link to="/watches" className=" hover:text-red-800">
              Movies
            </Link>
            <Link to="/series" className=" hover:text-red-800">
              Series
            </Link>
          </div>
          <form>
            <input
              type="text"
              placeholder="Search......."
              className="w-[20vw] p-2 rounded-sm bg-blue-100 text-blue-950 font-bold"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <button
              className="px-12 m-2 bg-red-700 rounded-lg py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/search/${query}`);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
