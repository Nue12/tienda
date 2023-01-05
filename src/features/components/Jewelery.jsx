import React from "react";
import { AllItems } from "../items/AllItems";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export default function Jewelery() {
  return (
    <>
      <NavBar />
      <AllItems typeOfItem="jewelery" />
      <Footer />
    </>
  );
}
