import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/Logo.svg";

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [require, setRequire] = useState(false);
  const [needValid, setNeedValid] = useState(false);
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const signIn = () => {
    setRequire(false);
    setNeedValid(false);
    if (email === "") {
      setRequire((req) => !req);
    } else if (email.match(validRegex)) {
      navigate("/");
    } else {
      setNeedValid((preNV) => !preNV);
    }
  };
  return (
    <section className="px-4 phsm:p-7 max-w-[375px] mx-auto mt-10">
      <img src={logo} alt="logo" className="my-5" />
      <h3 className=" my-3">Enter your email to login or sign up.</h3>
      <div className="relative group mt-10">
        <input
          value={email}
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 text-base peer bg-white border-black border rounded-lg outline-none"
        />
        <label
          htmlFor="email"
          className="bg-white transform transition-all absolute top-3 left-3 px-1 flex items-center text-lg group-focus-within:text-sm peer-valid:text-sm group-focus-within:-translate-y-full peer-valid:-translate-y-full "
        >
          Email
        </label>
        {require && (
          <span className=" text-[#FF0000] pl-4 mt-2 text- block">
            Required
          </span>
        )}
        {needValid && (
          <span className=" text-[#FF0000] pl-4 mt-2 text- block">
            fill the valid email
          </span>
        )}
      </div>
      <p className=" text-[#777070] my-3">
        By continuing, I agree to tienda’s{" "}
        <span className=" text-base underline">privacy policy</span> and{" "}
        <span className=" text-base underline">Terms of Use</span>.
      </p>
      <button
        disabled={false}
        className={`bg-black w-full text-white p-2`}
        onClick={signIn}
      >
        Continue
      </button>
    </section>
  );
};
