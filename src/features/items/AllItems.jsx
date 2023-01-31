import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../components/loading";
import { ItemExcerpt } from "./itemExcerpt";
import {
  selectEletronic,
  selectJewelery,
  selectMenWear,
  selectWomenWear,
} from "./itemsSlice";

export const AllItems = ({ typeOfItem }) => {
  const itemStatus = useSelector((state) => state.items.status);

  let items;
  switch (typeOfItem) {
    case "men":
      items = useSelector(selectMenWear);
      break;
    case "women":
      items = useSelector(selectWomenWear);
      break;
    case "electronics":
      items = useSelector(selectEletronic);
      break;
    case "jewelery":
      items = useSelector(selectJewelery);
  }
  console.log(items);

  let content;

  if (itemStatus === "loading") {
    content = <Loading text="loading..." />;
  } else if (itemStatus === "succeeded") {
    content = items.map((item) => <ItemExcerpt item={item} key={item.id} />);
  } else if (itemStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className=" mt-24 sm:px-4">
      <h1 className="ml-5">{typeOfItem}</h1>
      <section className=" flex justify-around flex-wrap my-5">
        {content}
      </section>
    </section>
  );
};
