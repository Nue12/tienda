import React from "react";
import { useNavigate } from "react-router-dom";
import jewellery from "../../../public/jewellery.png";
import menWear from "../../../public/Man.png";
import womenWear from "../../../public/woman.png";
import womenQuote from "../../../public/womanQuote.png";

export const LinkTo = () => {
  const navigate = useNavigate();
  return (
    <section className=" p-5 lg:px-14 max-w-7xl mx-auto mt-14">
      {/* Jewellery */}
      <div className=" max-w-lg mx-auto md:max-w-none my-10">
        <h1>jewellery</h1>
        <div
          className=" mt-5  sm:flex md:bg-[#EBE3D2] justify-between cursor-pointer"
          onClick={() => navigate("/jewelery")}
        >
          <div className=" hidden md:block w-60 m-auto">
            <p className=" text-2xl font-joseSans lg:text-3xl">
              Every piece of{" "}
            </p>
            <p className=" text-2xl font-joseSans pl-10 lg:text-3xl">
              Jewellery tells
            </p>
            <p className=" text-2xl font-joseSans pl-32 lg:text-3xl">a story</p>
          </div>
          <img src={jewellery} alt="jewellery" />
        </div>
      </div>
      {/* Men clothing */}
      <div className="max-w-lg mx-auto md:max-w-none my-10">
        <h1>men's clothing</h1>
        <div
          className=" bg-[#EEEEEE] mt-5 cursor-pointer md:flex justify-between md:w-auto"
          onClick={() => navigate("/men")}
        >
          <img
            src={menWear}
            alt="men's clothing"
            className=" w-60 mx-auto md:mx-0"
          />
          <div className=" hidden md:block w-96 m-auto">
            <p className=" text-2xl font-inriaSerif lg:text-3xl">
              always dress well,{" "}
            </p>
            <p className=" text-2xl font-inriaSerif pl-20 lg:text-3xl">
              keep it simple
            </p>
            <p className=" text-2xl font-inriaSerif pl-40 lg:text-3xl">
              but significant
            </p>
          </div>
        </div>
      </div>
      {/* women's clothing */}
      <div className="max-w-lg mx-auto md:max-w-none my-10">
        <h1>women's clothing</h1>
        <div
          className=" mt-5  sm:flex bg-[#C1A703] justify-between cursor-pointer"
          onClick={() => navigate("/women")}
        >
          <img
            src={womenQuote}
            alt="women quote"
            className=" hidden xl:block"
          />
          <div className=" hidden md:block  m-auto">
            <p className=" text-white text-2xl font-joseSans lg:text-3xl">
              clothes aren't going{" "}
            </p>
            <p className=" text-white text-2xl font-joseSans pl-10 lg:text-3xl">
              to change the world, the
            </p>
            <p className=" text-white text-2xl font-joseSans pl-32 lg:text-3xl">
              women who wear them will
            </p>
          </div>
          <img
            src={womenWear}
            alt="women's clothing"
            className=" w-64 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};
