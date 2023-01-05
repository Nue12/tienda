import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllItems } from "./itemsSlice";

export const Test2 = () => {
  const dispatch = useDispatch();
  const menWear = useSelector(selectAllItems);
  const menWearStatus = useSelector((state) => state.items.status);
  useEffect(() => {
    if (menWearStatus === "idle") {
      dispatch(fetchMenClothing());
    }
  }, [menWearStatus, dispatch]);

  const renderMenWear = menWear.map((manWear) => (
    <div key={manWear.id}>
      <h1>{manWear.title}</h1>
    </div>
  ));
  return <div>{renderMenWear}</div>;
};
