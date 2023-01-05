import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/loading";
import { ItemExcerpt } from "./itemExcerpt";
import {
  fetchItems,
  selectEletronic,
  selectJewelery,
  selectMenWear,
  selectWomenWear,
} from "./itemsSlice";

export const AllItems = ({ typeOfItem }) => {
  const dispatch = useDispatch();
  const itemStatus = useSelector((state) => state.items.status);

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

  let content;

  if (itemStatus === "loading") {
    content = <Loading text="loading..." />;
  } else if (itemStatus === "succeeded") {
    content = items.map((item) => <ItemExcerpt item={item} key={item.id} />);
  } else if (itemStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className=" mt-24 px-4">
      <h1 className="ml-5">{typeOfItem}</h1>
      <section className=" flex justify-around flex-wrap my-5">
        {content}
      </section>
      {/* <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
          />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
        </div>
        
        <div className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer">
        <div className=" h-60 overflow-hidden">
        <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="an image"
        className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
        />
        </div>
        <div className="mt-2">
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <span>men's clothing</span>
        <p>$109.95</p>
        </div>
      </div> */}
    </section>
  );
};
