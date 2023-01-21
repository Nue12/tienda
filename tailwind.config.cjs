/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        joseSans: ["Josefin Sans"],
        inriaSerif: ["Inria Serif"],
      },
      screens: {
        phsm: "300px",
        phmd: "410px",
        tablet: "900px",
      },
      boxShadow: {
        itemBox: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
