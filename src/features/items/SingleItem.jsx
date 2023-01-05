import React from "react";
import { SizeDiv } from "./SizeDiv";

export const SingleItem = () => {
  return (
    <section className=" p-5">
      <div>
        <div>
          <span>men's clothing</span>
          <h2 className=" font-semibold pr-20 mt-3">
            Men Casual Premium Slim Fit T-Shirts
          </h2>
          <p>$ 22.3</p>
        </div>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Image"
          className=" my-3"
        />
      </div>
      {/* size */}
      <SizeDiv />
      {/* description */}
      <div className=" my-14">
        <h2>Description</h2>
        <p className=" pl-5 leading-6">
          Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing. And Solid stitched shirts with round neck made for durability
          and a great fit for casual fashion wear and diehard baseball fans. The
          Henley style round neckline includes a three-button placket.
        </p>
      </div>

      {/* You may also like */}
      <div></div>
    </section>
  );
};
