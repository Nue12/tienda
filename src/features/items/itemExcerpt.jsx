import React from "react";

export const ItemExcerpt = ({ item }) => {
  return (
    <div className="w-[170px] phmd:w-[185px] shadow-itemBox my-4 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
      <div className=" h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
      </div>
      <div className="mt-2">
        <p>{item.title}</p>
        <span>{item.category}</span>
        <p>{item.price}</p>
      </div>
    </div>
  );
};
