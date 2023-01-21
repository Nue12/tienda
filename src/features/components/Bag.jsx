import React, { useState } from "react";
import heart from "../../../public/heart.svg";
import trashCan from "../../../public/trash-can.svg";
import dArrow from "../../../public/arrow.svg";

export default function Bag() {
  const [promoInput, setPromoInput] = useState(false);
  console.log(promoInput);
  return (
    <section className=" m-28 tablet:flex justify-between tablet:space-x-10 px-5 sm:px-20 max-w-7xl mx-auto">
      <div className=" tablet:w-3/6 mx-auto">
        <div className=" flex space-x-10 border-b border-black py-5">
          <div>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="items"
              className=" w-36"
            />
          </div>
          <div className=" flex pt-2 justify-between w-2/3">
            <div>
              <p>Item name</p>
              <span>men's clothing</span>
              <div className=" my-1">
                <label>Size</label>
                <select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div>
                <label>Quantity</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div className=" flex mt-8 space-x-5">
                <img src={heart} className=" w-6 icon" />
                <img src={trashCan} className=" w-6 icon" />
              </div>
            </div>
            <div>
              <p>$ 90</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" tablet:w-3/6 mx-auto mt-10">
        <h3>Summary</h3>
        <div
          className=" flex justify-between cursor-pointer"
          onClick={() => setPromoInput((preVal) => !preVal)}
        >
          <p>Do you have promo code ?</p>
          <img
            src={dArrow}
            className={`w-6 ${
              promoInput && " rotate-180"
            } duration-200 ease-in-out icon`}
          />
        </div>
        <div
          className={`${
            promoInput && "h-9"
          } h-0 overflow-hidden transition-all duration-150 ease-in`}
        >
          <input
            type="text"
            className=" border border-[#766B6B] rounded-md h-8 p-2"
          />
          <button className=" border border-[#766B6B] px-5 py-1 ml-5">
            Apply
          </button>
        </div>
        <div className=" flex justify-between">
          <p>subtotal</p>
          <p>$ 90</p>
        </div>
        <div className=" flex justify-between">
          <p>Estimate Shipping & Handling</p>
          <p>$ 90</p>
        </div>
        <div className=" flex justify-between border-y py-3 my-4 border-black">
          <p>Total</p>
          <p>$ 90</p>
        </div>
        <div className=" mx-auto w-80 my-4">
          <button className=" text-white bg-black w-full sm:w-80 py-4">
            Go to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
