import React from "react";

export default function SearchItems({ itemsArray }) {
  const renderSearchItem = itemsArray.map((item) => (
    <div className=" w-44 p-4 " key={item.id}>
      <div>
        <img src={item.image} alt="item" className=" w-28" />
      </div>
      <div>
        <p>{item.title}</p>
        <span>{item.category}</span>
        <p>${item.price}</p>
      </div>
    </div>
  ));
  return (
    <section className=" flex bg-stone-100 absolute top-20 w-full">
      <div className=" flex w-[890px] m-auto flex-wrap">{renderSearchItem}</div>
    </section>
  );
}
