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
      <div className=" flex w-[890px] m-auto flex-wrap">
        {renderSearchItem}
        {/* <div className=" w-52 p-5 flex flex-col items-center">
          <div className=" p-3 bg-white">
            <img
              src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
              alt="item"
              className=" w-28"
            />
          </div>
          <div>
            <p>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
            <span>electronics</span>
            <p>109</p>
          </div>
        </div>
        <section className=" w-52 p-5 flex flex-col items-center">
          <div className=" py-3">
            <img
              src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
              alt="item"
              className=" w-28"
            />
          </div>
          <div>
            <p>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
            <span>electronics</span>
            <p>109</p>
          </div>
        </section>
        <section className=" w-52 p-5 flex flex-col items-center">
          <div className=" py-3">
            <img
              src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
              alt="item"
              className=" w-28"
            />
          </div>
          <div>
            <p>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
            <span>electronics</span>
            <p>109</p>
          </div>
        </section>
        <section className=" w-52 p-5 flex flex-col items-center">
          <div className=" py-3">
            <img
              src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
              alt="item"
              className=" w-28"
            />
          </div>
          <div>
            <p>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
            <span>electronics</span>
            <p>109</p>
          </div>
        </section> */}
      </div>
    </section>
  );
}
