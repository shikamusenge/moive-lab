import React from "react";
import ProNav from "../../../../components/Product/ProNav";
import img1 from "../../../../../public/pro1.png";
import img2 from "../../../../../public/pro2.png";
import img3 from "../../../../../public/pro2.jpg";
import img4 from "../../../../../public/prod1.png";
import BuyBtn from "../../../../components/Product/BuyBtn";
import Card1 from "../../../../components/Product/Card1";
import Card2 from "../../../../components/Product/Card2";
import {
  FaCartPlus,
  FaConnectdevelop,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FaMessage, FaPersonRifle, FaYoutube } from "react-icons/fa6";
const LandingPage1 = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <ProNav />
      <div className="mx-12 lg:mx-12 text-white">
        <div className="h-screen flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <p className="text-[cyan] font-bold text-lg text-end">
              SnakerPeaker
            </p>
            <p className="font-extrabold text-[25] lg:text-[45px]">
              THE ULTMATE
              <span className="text-orange-600"> SNEAK </span> SHOES PARADISE
            </p>
            <p className="text-sm font-light my-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              explicabo
            </p>
            <BuyBtn />
            <div className="flex gap-2 my-8">
              <i className="fa fa-star text-orange-800">
                <FaStar />
              </i>
              <i className="">
                <FaStar color="orange" />
              </i>
              <i className="fa fa-star  text-cyan-800">
                <FaStar />
              </i>
              <i className="fa fa-star ">
                <FaStar />
              </i>
            </div>
          </div>
          <div className="mr-4 w-3/6">
            <img
              src={img1}
              alt=""
              className="w-full h-[200px] md:h-[480px]   mix-blend-color-dodge"
            />
          </div>
          <div className="flex flex-row md:flex-col gap-4 items-end justify-end md:w-1/6">
            <p className="md:w-[10rem] bg-slate-900 h-[4rem] overflow-hidden">
              <img
                src={img2}
                alt=""
                className="w-[80px]  -mt-4 bg-cover mix-blend-screen"
              />
            </p>
            <p className="md:w-[10rem] bg-slate-900 h-[4rem] overflow-hidden">
              <img
                src={img2}
                alt=""
                className="w-[80px]  -mt-4 bg-cover mix-blend-screen"
              />
            </p>
            <p className="md:w-[10rem] bg-slate-900 h-[4rem] overflow-hidden">
              <img
                src={img2}
                alt=""
                className="w-[80px]  -mt-4 bg-cover mix-blend-screen"
              />
            </p>
            <p className="md:w-[10rem] bg-slate-900 h-[4rem] overflow-hidden">
              <img
                src={img2}
                alt=""
                className="w-[80px]  -mt-4 bg-cover mix-blend-screen"
              />
            </p>
          </div>
        </div>
        {/* ------------------- part2--------------- */}
        <div className="min-h-[90vh] my-auto font-semibold items-center">
          <div className="md:text-[40px] text-[30px] text-center">
            OUR COLLECTIO
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="md:w-3/6 flex p-4 justify-center flex-1 items-center bg-slate-800 rounded-lg">
              <div className="w-full  md:w-1/2">
                <p>
                  BLACK FRIDAY <span>SALES</span>
                </p>
                <p className="text-[19px] md:text-[30px] italics">
                  <span className="md:text-[40px] shadow">UPTO</span>
                  <p>55%OFF</p>
                </p>
                <p>
                  <BuyBtn />
                </p>
              </div>
              <p className="md:w-1/2">
                <img
                  src={img2}
                  alt=""
                  srcset=""
                  className="mix-blend-lighten min-w-[10rem]  md:h-[350px] py-10"
                />
              </p>
            </div>
            <div className="md:w-2/4">
              <div className="flex p-4 flex-1 bg-slate-800 rounded-lg">
                <div className="w-full">
                  <p>PUMA SHOES</p>
                  <p className="text-sm font-extralight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    earum.
                  </p>
                  <p>
                    <BuyBtn />
                  </p>
                </div>
                <p className="md:w-1/2">
                  <img
                    src={img2}
                    alt=""
                    srcset=""
                    className="mix-blend-lighten"
                  />
                </p>
              </div>
              <div className="flex gap-4 my-2">
                <div className="w-1/2">
                  <Card1 name="Airforce max" image="/air.png" />
                </div>
                <div className="w-1/2">
                  <Card1 name="Nike Airforce max" image="/nike.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============== part 3================= */}
      <div className="text-white min-h-[90vh] flex flex-col justify-center">
        <div className="md:text-[40px] text-center text-white mb-10">
          FOR MENS
        </div>
        <div
          className="mx-12 grid grid-cols-1 sm:justify-center
         md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/nike.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/nike.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/nike.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/nike.png"
          />
        </div>
      </div>
      {/* // =========================== part 4 ========================== */}
      <div className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center md:justify-between md:items-center mx-12">
        <div className="md:w-1/2 gap-4 text-white">
          <p className="text-cyan-600 text-2xl">Lorem ipsum</p>
          <p className="md:text-[65px] uppercase mb-10 font-bold">
            Elevete Your Look with{" "}
            <span className="text-orange-600">SHOES</span>
          </p>
          <p>
            recusandae obcaecati iure praesentium nesciunt harum cumque amet
            nulla numquam veniam corporis quas natus sapiente odio tenetur!
          </p>
          <div className="my-3">
            <BuyBtn />
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={img1} alt="" className="md:h-[30rem]" />
        </div>
      </div>

      {/* ============== part 5================= */}
      <div className="text-white min-h-[80vh] flex flex-col justify-center">
        <div className="md:text-[40px] text-center text-white mb-10">
          FOR WOMENS
        </div>
        <div
          className="mx-12 grid grid-cols-1 sm:justify-center
         md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <Card2
            title="Seankers"
            detail="Sneaker best qualit for womens free cost and reliable"
            urlImage="/w2.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/w2.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/w2.png"
          />
          <Card2
            title="Seankers"
            detail="lorem riduoihpj0-wqe[fj0phugsyvuihdjfo=fhiuysaj"
            urlImage="/w2.png"
          />
        </div>
      </div>
      {/* ============== part 6================= */}
      <div id="contact" className="m-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="relative md:flex items-center justify-center p-4">
            <h1 className="md:-rotate-45 text-right text-2xl md:font-extrabold italic shadow-lg">
              GET IN TOUCH
            </h1>
          </div>
          <div className="md:w-4/6">
            <form className="shadow-lg shadow-slate-500 p-2 rounded-md mb-4">
              <div className="border-b-2 flex border-b-slate-700 rounded-t-md overflow-hidden my-3 ">
                <span className=" bg-slate-700 p-2 w-1/12 ">
                  {<FaPersonRifle />}
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Names"
                  className="bg-slate-900 w-11/12 focus:outline-none px-2"
                />
              </div>
              <div className="border-b-2 flex border-b-slate-700 rounded-t-md overflow-hidden my-3 ">
                <span className=" bg-slate-700 p-2 w-1/12 ">{<FaPhone />}</span>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="bg-slate-900 w-11/12 focus:outline-none px-2"
                />
              </div>
              <div className="border-b-2 flex border-b-slate-700 rounded-t-md overflow-hidden my-3 ">
                <span className=" bg-slate-700 p-2 w-1/12 ">
                  {<FaEnvelope />}
                </span>
                <input
                  type="Enter Your Email"
                  placeholder="Enter Your Email"
                  className="bg-slate-900 w-11/12 focus:outline-none px-2"
                />
              </div>
              <div className="border-b-2 flex border-b-slate-700 rounded-t-md overflow-hidden my-3 ">
                <span className=" bg-slate-700 p-2 w-1/12 ">
                  {<FaMessage />}
                </span>
                <textarea
                  type="text"
                  placeholder="Enter Message here "
                  className="bg-slate-900 w-11/12 focus:outline-none px-2"
                  rows={3}
                />
              </div>
              <div className=" bg-slate-800 rounded-md text-2xl text-center p-3 overflow-hidden my-3 ">
                <input type="submit" value={"Send"} />
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="md:flex justify-between w-full bottom-0 py-8">
          <div>
            SNEAKER <span className="text-cyan-600">PEAK</span>{" "}
          </div>
          <div>
            {" "}
            Fast and reliable service is ou mission call +(250) 784 589 448
          </div>
          <div className="flex text-white gap-7">
            <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
