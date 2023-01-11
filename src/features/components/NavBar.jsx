import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllItems } from "../items/itemsSlice";
import SearchItems from "./SearchItems";

export const NavBar = () => {
  const [mouseWheel, setMouseWheel] = useState(true);
  const [itemsArray, setItemsArray] = useState([]);
  const [searchTab, setSearchTab] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  // {
  // }

  console.log(itemsArray);

  return (
    <nav className=" relative z-50 ">
      <div
        className={`flex items-center justify-between fixed shadow-itemBox ${
          !mouseWheel ? "-translate-y-24" : ""
        } top-0 bg-white transition-all duration-200 ease-in-out w-full phsm:py-3 sm:py-5`}
      >
        <div className="flex w-full items-center justify-between phsm:px-3 sm:px-5 max-w-7xl mx-auto">
          <img src="../../../public/Logo.svg" alt="logo" />
          {/* Icon Search */}
          {/* <div className="hidden sm:block w-72 md:w-96 relative">
            <FontAwesomeIcon
              icon={faSearch}
              className=" text-xl sm:absolute top-2.5 left-5"
              onClick={() => setSearchTab((searchTab) => !searchTab)}
            />
            <input
              type="text"
              className=" placeholder:text-center focus:outline-none px-12 py-2 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] w-full"
              placeholder="search the item"
              onKeyUp={(e) => {
                searchAlgo(e);
              }}
            />
          </div> */}

          {/* Icon */}
          <div className=" flex space-x-2 phsm:space-x-4 sm:space-x-6 items-center ">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl cursor-pointer"
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

        {/* searchItem absolute */}
        {itemsArray && <SearchItems itemsArray={itemsArray} />}

        {/* search absolute */}
        <div
          className={` absolute max-w-7xl mx-auto ${
            searchTab ? "top-0" : "-top-40"
          } inset-x-0 bg-white transition-all duration-500 p-5 flex justify-between items-center space-x-5`}
        >
          <input
            type="search"
            value={{}}
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
      </div>
    </nav>
  );
};
