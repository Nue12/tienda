import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import {
  selectEletronic,
  selectJewelery,
  selectMenWear,
  selectWomenWear,
} from "./itemsSlice";
import { useNavigate } from "react-router-dom";
import leftArrow from "../../../public/left-arrow.svg";
import rightArrow from "../../../public/right-arrow.svg";

export const AlsoWant = ({ typeOfCategory }) => {
  const itemStatus = useSelector((state) => state.items.status);
  const navigate = useNavigate();

  const swiperRef = useRef();

  let items;
  switch (typeOfCategory) {
    case "men's clothing":
      items = useSelector(selectMenWear);
      break;
    case "women's clothing":
      items = useSelector(selectWomenWear);
      break;
    case "electronics":
      items = useSelector(selectEletronic);
      break;
    case "jewelery":
      items = useSelector(selectJewelery);
  }

  let content;
  if (itemStatus === "loading") {
    content = <Loading text="loading..." />;
  } else if (itemStatus === "succeeded") {
    content = items.map((item) => (
      <SwiperSlide key={item.id}>
        <div
          className=" w-[170px] phmd:w-[185px] shadow-itemBox my-1 p-1 phmd:p-[10px] sm:p-5 sm:w-72 group cursor-pointer"
          onClick={() => {
            navigate(`/${item.id}`);
          }}
        >
          <div className=" h-60 overflow-hidden">
            <img
              src={item.image}
              alt="an image"
              className=" w-40 mx-auto group-hover:w-44 transition-width duration-200 ease-in-out"
            />
          </div>
          <div className="mt-2">
            <p className=" pr-10 text-ellipsis whitespace-nowrap overflow-hidden">
              {item.title}
            </p>
            <span>{item.category}</span>
            <p>${item.price}</p>
          </div>
        </div>
      </SwiperSlide>
    ));
  } else if (itemStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className=" pt-5 pl-5 relative">
      <Swiper
        breakpoints={{
          600: { slidesPerView: 2.5 },
          640: { slidesPerView: 2 },
          840: { slidesPerView: 2.5 },
          1000: { slidesPerView: 3 },
          1200: { slidesPerView: 3.5 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="py-12"
      >
        <div className=" absolute top-0 right-2 md:right-5 lg:right-14 z-50">
          <button
            className=" m-1 h-10 w-10"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <img src={leftArrow} alt="icon" className=" w-10" />
          </button>
          <button
            className=" m-1 h-10 w-10"
            onClick={() => swiperRef.current.slideNext()}
          >
            <img src={rightArrow} alt="icon" className="w-10" />
          </button>
        </div>
        {content}
      </Swiper>
    </div>
  );
};
