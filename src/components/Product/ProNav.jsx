import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
const ProNav = () => {
  return (
    <div className="bg-slate-900 sticky top-0 bg-cover flex z-50  xl:justify-center text-white ">
      <div className="flex items-center mx-8 py-4 lg:mx-12 w-full xl:w-[1200px] justify-between ">
        <div className="font-bold mr-4">
          <span>SNEAKER</span> <span className="text-blue-800">PEAK</span>
        </div>
        <div className="gap-4 hidden md:flex">
          <p>
            <Link to={"./#home"}>Home</Link>
          </p>
          <p>
            <Link to={"/pricing"}>Pricing</Link>
          </p>
          <p>
            <Link to={"/about"}>About</Link>
          </p>
          <p>
            <Link to={"/contact"}> Contact Us</Link>
          </p>
        </div>
        <form className="hidden md:flex overflow-hidden items-center text-black h-fit w-fit bg-white rounded-md">
          <input type="search" className="px-2 focus:outline-none" />{" "}
          <FaSearch />
        </form>
        <div className="text-2xl md:hidden">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default ProNav;
