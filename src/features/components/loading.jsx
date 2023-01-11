import React from "react";
import loadingIcon from "../../../public/loading_icon.png";

export const Loading = ({ text }) => {
  return (
    <div className=" text-center text-[#766B6B] flex flex-col justify-center items-center space-y-5 my-24">
      <img src={loadingIcon} alt="loading" className=" animate-spin" />
      <h2>{text}</h2>
    </div>
  );
};
