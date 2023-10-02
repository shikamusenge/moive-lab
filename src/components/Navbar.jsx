import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaToggleOn } from "react-icons/fa6";
import SearchBox from "./SearchBox";
const Navbar = () => {
  const [isToggleOpen, setToggleOpen] = useState(false);
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  return (
    <div className="top-0 sticky z-20">
      <nav className=" px-12  items-center grid bg-blue-950 h-[100px] xl:justify-center">
        <div className=" flex justify-between text-white items-center h-fit max-h-[85px] xl:w-[1250px] max-w-[1250px]">
          <div className="text-white text-2xl flex justify-center items-center md:font-extrabold">
            <img src="/logo.png" alt="" className="h-[80px]" />{" "}
          </div>
          <div className="relaive">
            <div
              className={`absolute bg-blue-950 gap-4 ${
                isToggleOpen ? "flex" : "hidden md:flex"
              } flex-col top-0 z-20 left-0 
             h-screen w-[80vw] p-8
             md:flex-row md:relative md:h-fit md:w-fit
             md:items-center
             `}
              onClick={(e) => {
                if (e.target.classList.contains("link")) {
                  setToggleOpen(false);
                }
              }}
            >
              <div className="flex justify-end">
                <span
                  id="cancel"
                  className="rounded-md p-2 cursor-pointer md:hidden"
                  onClick={() => setToggleOpen(false)}
                >
                  X
                </span>
              </div>
              <Link
                to="/"
                className="link hover:text-red-800 hover:border md:hover:border-none text-[16px] font-bold"
              >
                Browser
              </Link>
              <Link
                to="/watches"
                className="link hover:text-red-800 hover:border md:hover:border-none text-[16px] font-bold"
              >
                Movies
              </Link>
              <Link
                to="/series"
                className="link hover:text-red-800 hover:border md:hover:border-none text-[16px] font-bold"
              >
                Series
              </Link>{" "}
              <SearchBox padding={1} key={"navBarSearch"} />
            </div>
          </div>
          <span
            className={`font-extrabord ${
              isToggleOpen && "hidden"
            } md:hidden text-[2rem] cursor-pointer`}
            onClick={() => {
              setToggleOpen(true);
            }}
          >
            <FaBars />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
