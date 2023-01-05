import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Footer = () => {
  const [suppOpen, setSuppOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <footer className=" bg-[#0A0A24] text-white text-base leading-8 p-5">
      <div className=" md:flex justify-between max-w-7xl mx-auto">
        <ul className=" font-semibold my-5 md:w-1/3">
          <li className=" cursor-pointer">GIFT CARD</li>
          <li className=" cursor-pointer">PROMOTION</li>
          <li className=" cursor-pointer">SIGN UP FOR EMAIL</li>
          <li className=" cursor-pointer">SEND US FEEDBACK</li>
        </ul>
        <hr className="" />
        <div className=" my-3  md:w-1/3">
          <div
            className=" flex justify-between items-center  cursor-pointer md:cursor-auto"
            onClick={() => setSuppOpen((preSupp) => !preSupp)}
          >
            <p className=" font-semibold">SUPPORT</p>
            <FontAwesomeIcon
              icon={suppOpen ? faCaretUp : faCaretDown}
              className={` $ md:hidden`}
            />
          </div>
          <ul
            className={` ml-5 text-[#D9D9D9] ${
              suppOpen ? "h-40" : "h-0"
            } overflow-hidden md:h-auto md:ml-0 transition-all duration-200 ease-in-out `}
          >
            <li className=" cursor-pointer">Order Status</li>
            <li className=" cursor-pointer">Shipping and Delivery</li>
            <li className=" cursor-pointer">Returns</li>
            <li className=" cursor-pointer">Payment Option</li>
            <li className=" cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className=" md:w-1/3 md:my-3">
          <div
            className=" flex justify-between items-center"
            onClick={() => setAboutOpen((preAbout) => !preAbout)}
          >
            <p className=" font-semibold">About</p>
            <FontAwesomeIcon
              icon={aboutOpen ? faCaretUp : faCaretDown}
              className={` $ md:hidden`}
            />
          </div>
          <ul
            className={` ml-5 text-[#D9d9d9] ${
              aboutOpen ? "h-32" : "h-0"
            } overflow-hidden md:h-auto md:ml-0 transition-all duration-200 ease-in-out`}
          >
            <li className=" cursor-pointer">About Us</li>
            <li className=" cursor-pointer">Purpose</li>
            <li className=" cursor-pointer">News</li>
            <li className=" cursor-pointer">Discount</li>
          </ul>
        </div>
      </div>

      <div className="flex-col flex justify-between text-[#D9d9d9] mt-4 md:flex-row-reverse">
        <ul className=" md:flex md:space-x-5">
          <li className=" cursor-pointer">Guide</li>
          <li className=" cursor-pointer">Privacy Policy</li>
          <li className=" cursor-pointer">Terms of sale</li>
          <li className=" cursor-pointer">Terms of use</li>
        </ul>
        <p>© 2022 tienda, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};
