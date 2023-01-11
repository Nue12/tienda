import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../components/loading";
import { AlsoWant } from "./AlsoWant";
import { selectItemById } from "./itemsSlice";
import { SizeDiv } from "./SizeDiv";

export const SingleItem = () => {
  const { itemId } = useParams();
  const item = useSelector((state) => selectItemById(state, Number(itemId)));
  const itemStatus = useSelector((state) => state.items.status);
  console.log(itemStatus);
  if (itemStatus === "loading") {
    return <Loading text="loading..." />;
  }

  return (
    <section className="  mt-20">
      <div className="p-5">
        <div className=" sm:flex flex-row-reverse">
          <div className=" sm:w-3/6 sm:px-14 py-10">
            <span className=" sm:text-lg">{item.category}</span>
            <h2 className=" font-semibold sm:pr-14 mt-3 sm:text-4xl">
              {item.title}
            </h2>
            <p className=" sm:text-lg">$ {item.price}</p>
            <div className=" hidden sm:block">
              <div className=" my-14">
                <h2>Description</h2>
                <p className=" pl-5 leading-6 sm:text-lg">{item.description}</p>
              </div>
              <SizeDiv />
            </div>
          </div>
          <div className=" my-3 sm:w-3/6">
            <img src={item.image} alt="Image" className="mx-auto sm:max-w-lg" />
          </div>
        </div>
        {/* size */}
        <div className=" sm:hidden">
          <SizeDiv />
        </div>
        {/* description */}
        <div className=" my-14 sm:hidden">
          <h2>Description</h2>
          <p className=" pl-5 leading-6">{item.description}</p>
        </div>
      </div>
      {/* You may also like */}
      <div className="my-14 sm:ml-10">
        <h2 className=" py-5 px-5">You may also like</h2>
        <AlsoWant typeOfCategory={item.category} />
      </div>
    </section>
  );
};
