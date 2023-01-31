import React from "react";
import { Hero } from "./Hero";
import { LinkTo } from "./linkTo";
import { AllItems } from "../items/AllItems";

export const Root = () => {
  return (
    <>
      <Hero />
      <LinkTo />
      <AllItems typeOfItem="electronics" />
    </>
  );
};
