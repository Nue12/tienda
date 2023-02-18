import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItems } from "../items/itemsSlice";
import SearchItems from "./SearchItems";
import heart from "../../../public/heart.svg";
import cart from "../../../public/cart.svg";
import profile from "../../../public/profile.svg";
import search from "../../../public/search.svg";
import hambugerMenu from "../../../public/hamburger-menu.svg";
import cross from "../../../public/cross.svg";
import logo from "../../../public/Logo.svg";

export const NavBar = () => {
  const [mouseWheel, setMouseWheel] = useState(true);
  const [itemsArray, setItemsArray] = useState([]);
  const [searchTab, setSearchTab] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        if (mouseWheel === true) return;
        setMouseWheel(true);
      } else if (event.deltaY > 0) {
        if (mouseWheel === false) return;
        setMouseWheel(false);
      }
    });
  }, [mouseWheel]);

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    if (!searchTab) {
      searchInput.value = "";
    }
  }

  const items = useSelector(selectAllItems);

  const updateDebounceText = debounce((text) => {
    if (text.length > 0) {
      const searchItem = items.filter((item) => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setItemsArray(searchItem);
    } else {
      setItemsArray([]);
    }
  }, 500);

  function searchAlgo(e) {
    updateDebounceText(e.target.value);
  }
  function debounce(cb, delay = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  return (
    <nav className=" relative z-50 max-w-7xl ">
      <div
        className={`flex items-center justify-between fixed shadow-itemBox ${
          !mouseWheel ? "-translate-y-24" : ""
        } top-0 bg-white transition-all duration-200 ease-in-out w-full phsm:py-3 sm:py-5`}
      >
        <div className="flex w-full items-center justify-between phsm:px-3 sm:px-5 max-w-7xl mx-auto">
          <img src={logo} alt="logo" />
          <div className=" flex space-x-2 phsm:space-x-4 sm:space-x-6 items-center ">
            <img
              src={search}
              alt="icon"
              className=" w-7 icon"
              onClick={() => setSearchTab((searchTab) => !searchTab)}
            />
            <a href="sign_in">
              <img
                src={profile}
                alt="icon"
                className=" w-7 icon hidden sm:block"
              />
            </a>
            <img src={heart} alt="icon" className=" w-7 icon" />
            <a href="./cart">
              <img src={cart} alt="icon" className=" w-7 icon" />
            </a>
            <img
              src={hambugerMenu}
              alt="icon"
              className=" w-7 icon sm:hidden"
              onClick={() => setMenu((preMenu) => !preMenu)}
            />
          </div>
        </div>

        {/* searchItem absolute */}
        {searchTab && <SearchItems itemsArray={itemsArray} />}

        {/* search absolute */}
        <div
          className={` absolute max-w-7xl mx-auto ${
            searchTab ? "top-0" : "-top-40"
          } inset-x-0 bg-white transition-all duration-500 p-5 flex justify-between items-center space-x-5`}
        >
          <input
            type="text"
            id="searchInput"
            className=" placeholder:text-black placeholder:text-center p-2 rounded-full bg-[#D9D9D9] w-full outline-none"
            placeholder="search the item"
            onKeyUp={(e) => searchAlgo(e)}
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
          className={` absolute top-0 right-0 w-64 ${
            menu ? "z-30  " : "-z-10"
          } `}
        >
          <div
            className={` bg-white pb-96 shadow-itemBox p-5 font-medium absolute w-64 top-0 -right-100 transition-all duration-500 ${
              menu ? "-translate-x-0" : "translate-x-full"
            }`}
          >
            <div className=" absolute right-5">
              <img
                src={cross}
                alt="icon"
                className="icon w-7"
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
      </div>
    </nav>
  );
};
