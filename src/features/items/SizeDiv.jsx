import React from "react";

export const SizeDiv = () => {
  return (
    <section className=" my-5">
      <div className=" flex justify-between">
        <span>Size</span>
        <span>Size Guild</span>
      </div>

      <div className=" flex justify-between">
        <div className=" mt-3">
          <input type="radio" name="size" id="XS" className="hidden peer" />
          <label
            htmlFor="XS"
            className=" w-14 h-14 block rounded-[5px] py-[14px] text-center border border-black cursor-pointer text-lg peer-checked:bg-black peer-checked:text-white"
          >
            XS
          </label>
        </div>

        <div className=" mt-3">
          <input type="radio" name="size" id="S" className="hidden peer" />
          <label
            htmlFor="S"
            className=" w-14 h-14 block rounded-[5px] py-[14px] text-center border border-black cursor-pointer text-lg peer-checked:bg-black peer-checked:text-white"
          >
            S
          </label>
        </div>

        <div className=" mt-3">
          <input type="radio" name="size" id="M" className="hidden peer" />
          <label
            htmlFor="M"
            className=" w-14 h-14 block rounded-[5px] py-[14px] text-center border border-black cursor-pointer text-lg peer-checked:bg-black peer-checked:text-white"
          >
            M
          </label>
        </div>

        <div className=" mt-3">
          <input type="radio" name="size" id="L" className="hidden peer" />
          <label
            htmlFor="L"
            className=" w-14 h-14 block rounded-[5px] py-[14px] text-center border border-black cursor-pointer text-lg peer-checked:bg-black peer-checked:text-white"
          >
            L
          </label>
        </div>
        <div className=" mt-3">
          <input type="radio" name="size" id="XL" className="hidden peer" />
          <label
            htmlFor="XL"
            className=" w-14 h-14 block rounded-[5px] py-[14px] text-center border border-black cursor-pointer text-lg peer-checked:bg-black peer-checked:text-white"
          >
            XL
          </label>
        </div>
      </div>
    </section>
  );
};
