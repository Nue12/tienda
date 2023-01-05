import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  selectAllItems,
  selectEletronic,
  selectJewelery,
  selectMenWear,
  selectWomenWear,
} from "./itemsSlice";

export const Test = ({ typeOfItem }) => {
  // if (typeOfFilter === "men") console.log("men");
  const itemStatus = useSelector((state) => state.items.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (itemStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemStatus, dispatch]);
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
  const renderitems = items.map((item) => (
    <div key={item.id}>
      <h1>{item.title}</h1>
    </div>
  ));
  return <div>{renderitems}</div>;
};
