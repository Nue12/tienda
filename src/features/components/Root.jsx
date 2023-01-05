import React from "react";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { LinkTo } from "./linkTo";
import { Footer } from "./Footer";
import { AllItems } from "../items/AllItems";
import { Test } from "../items/test";

export const Root = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LinkTo />
      <AllItems typeOfItem="electronics" />
      <Footer />
    </>
  );
};
