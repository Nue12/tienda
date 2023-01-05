import React from "react";
import { AllItems } from "../items/AllItems";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const MenClothing = () => {
  return (
    <>
      <NavBar />
      <AllItems typeOfItem="men" />
      <Footer />
    </>
  );
};
