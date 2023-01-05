import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [mouseWheel, setMouseWheel] = useState(true);
  window.document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      setMouseWheel(true);
    } else if (event.deltaY > 0) {
      setMouseWheel(false);
    }
  });
  const [searchTab, setSearchTab] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <nav
      className={`flex items-center justify-between fixed shadow-itemBox ${
        !mouseWheel ? "-translate-y-24" : ""
      } top-0 bg-white phsm:p-3 sm:p-5 transition-all duration-200 ease-in-out  overflow-hidden w-full`}
    >
      <div className="flex w-full items-center justify-between">
        <img src="../../../public/Logo.svg" alt="logo" />
        {/* Icon Search */}
        <div className="hidden sm:block w-72 md:w-96 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className=" text-xl hidden sm:block absolute top-2.5 left-5"
          />
          <input
            type="text"
            className="placeholder:text-center focus:outline-none px-12 py-2 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] w-full"
            placeholder="search the item"
          />
        </div>

        {/* Icon */}
        <div className=" flex space-x-2 phsm:space-x-4 sm:space-x-6 ">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-xl sm:hidden cursor-pointer"
            onClick={() => setSearchTab((searchTab) => !searchTab)}
          />
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-xl md:text-2xl hidden sm:block cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="text-xl md:text-2xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-xl md:text-2xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl sm:hidden"
            onClick={() => setMenu((menu) => !menu)}
          />
        </div>
      </div>

      {/* search absolute */}
      <div
        className={` absolute ${
          searchTab ? "top-0" : "-top-40"
        } inset-x-0 bg-white transition-all duration-500 p-5 flex justify-between items-center space-x-5`}
      >
        <input
          type="search"
          className=" placeholder:text-black placeholder:text-center p-2 rounded-full bg-[#D9D9D9] w-full"
          placeholder="search the item"
        />
        <span
          className=" cursor-pointer text-lg"
          onClick={() => setSearchTab((searchTab) => !searchTab)}
        >
          cancel
        </span>
      </div>

      {/* menu absolute */}
      <div
        className={` absolute top-0 right-0 w-64 ${menu ? "z-30  " : "-z-10"} `}
      >
        <div
          className={` bg-white pb-96 shadow-itemBox p-5 font-medium absolute w-64 top-0 -right-100 transition-all duration-500 ${
            menu ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" absolute right-5">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl"
              onClick={() => setMenu((menu) => !menu)}
            />
          </div>
          <ul className=" text-xl text-center mt-20">
            <li className=" p-3">Men Wearing</li>
            <li className=" p-3">Women Wearing</li>
            <li className=" p-3">Electronic items</li>
          </ul>
          <button className="w-full mt-2 bg-black text-white px-5 py-2">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};
