import React from "react";
import headerImg1 from "../../../public/sayingHero1.png";
import headerImg2 from "../../../public/sayingHero2.png";
import headerImg3 from "../../../public/sayingHero3.png";

export const Hero = () => {
  return (
    <header className=" hidden xl:block mt-24 max-w-7xl mx-auto">
      <div className=" flex justify-around bg-[#CFB4B4] py-5">
        <img src={headerImg1} alt="heroImg" />
        <img src={headerImg3} alt="heroImg" />
        <img src={headerImg2} alt="heroImg" />
      </div>
    </header>
  );
};
