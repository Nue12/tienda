import React from "react";
import { useNavigate } from "react-router-dom";

export const ItemExcerpt = ({ item, typeOfItem }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[170px] phmd:w-[185px] shadow-itemBox my-4 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer select-none"
      onClick={() => navigate(`${item.id}`)}
    >
      <div className=" h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
      </div>
      <div className="mt-2">
        <p className="text-ellipsis whitespace-nowrap overflow-hidden">
          {item.title}
        </p>
        <span>{item.category}</span>
        <p>${item.price}</p>
      </div>
    </div>
  );
};
