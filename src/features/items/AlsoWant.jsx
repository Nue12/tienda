import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Mousewheel, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const AlsoWant = () => {
  const swiperRef = useRef();
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
        mousewheel
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        className="py-12"
      >
        <div className=" absolute top-0 right-2 md:right-5 lg:right-14 z-50">
          <button
            className=" m-1 border-2 border-black h-10 w-10"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className=" m-1 border-2 border-black h-10 w-10"
            onClick={() => swiperRef.current.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
