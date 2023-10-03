import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends, FaTwitter, FaFacebook } from "react-icons/fa";
import image from "../../../../../public/logo.png";
import Dotes from "./Dotes";
const LandingPAge2 = () => {
  return (
    <div className="min-h-screen  p-8 bg-orange-400">
      <section>
        <header className="text-white text-center">
          <p className="font-bold text-[30px] text-orange-200 tracking-wider ">
            Movies Libirary
          </p>
          <p className="text-2xl font-semibold">Business</p>
        </header>
        <main className="m-8 bg-white h-fit relative gap-3">
          <nav className="flex py-4 px-8 absolute w-full left-0 items-center justify-between">
            <div className="text-[40px] text-white">
              <FaUserFriends />
            </div>
            <div className="flex gap-2 font-bold">
              <Link to="#">Home</Link>
              <Link to="#">About</Link>
              <Link to="#">Contuct</Link>
              <Link
                to="#"
                className="btn bg-gradient-to-br from-yellow-100 h-fit p-1 rounded-sm to-yellow-500"
              >
                Signup
              </Link>
            </div>
          </nav>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="bg-black overflow-hidden text-white rounded-r-[375px] h-[750px]">
              <div className="absolute top-0 z-50 mt-[5rem] ml-7 text-orange-300">
                <Dotes cols={5} rows={3} color="orange-600" />
              </div>
              <div className="  bg-white rounded-r-[200px] -rotate-45 -ml-[16%] h-[400px] flex justify-end text-black items-center mt-[350px] w-full -mb-20">
                <div>
                  <div className="relative border-4 flex justify-center items-center border-gray-950 rounded-full h-[270px] w-[270px] m-4">
                    <img
                      src={image}
                      alt="image"
                      className="absolute rotate-45"
                    />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center -mr-[10rem]">
                <Dotes cols={4} rows={3} color="orange-600" />
              </div>
              <div className="text-black absolute gap-6 items-center top-0 mt-[700px] text-md mx-4 -mb-8 flex px-6">
                <p className="flex gap-2 items-center">
                  <FaTwitter /> &copy; success.inc
                </p>
                <p className="flex gap-2 items-center">
                  <FaFacebook /> success.inc
                </p>
              </div>
            </div>
            <div>
              <div className="mt-20 text-center relative">
                <div className="text-[4vw] mx-2 px-[10rem] font-extrabold text-center space-y-0">
                  <div className="absolute flex justify-center -mb-20 text-gray-500">
                    <Dotes cols={3} rows={3} color="gray-500" />
                  </div>
                  <div className="absolute flex justify-center right-0 -mb-10 text-gray-500 mr-4">
                    <Dotes cols={2} rows={3} color="gray-500" />
                  </div>
                  GROW <br />
                  YOUR BUSINESS
                </div>
                <p className="px-20 mb-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident omnis obcaecati dolorem eius. Aliquid, veniam. Ullam
                  eligendi animi id, obcaecati, nam qui, a minima ipsa repellat
                  atque exercitationem perferendis suscipit.
                </p>
              </div>
              <div className="px-4  -mb-10">
                <button className="rounded-lg bg-gradient-to-r mb-2 from-orange-300 to-orange-600 px-4 py-1">
                  Read More
                </button>
                <div className="flex relative justify-between">
                  <div className="bg-gradient-to-r w-fit  from-orange-400 mt-4 to-orange-600 h-fit p-[2px] rounded-lg">
                    <button className=" bg-white rounded-lg px-7 py-[2px] h-full w-full  text-bold">
                      Join Us
                    </button>
                  </div>
                  <div className="absolute w-full bottom-0 flex justify-center">
                    <Dotes cols={3} rows={2} color="gray-600" />
                  </div>
                  <p>
                    653 Alison avenue <br /> <b>Parkistan,Viriginia</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LandingPAge2;
