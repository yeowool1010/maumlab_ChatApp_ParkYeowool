const { RecoilBridge } = require("recoil");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        mainBg: "#FFECEC",
        chatBg: "#EBFBFF",
        btnBg: "#ED7E9B",
        poinPink: "#E06072",
        warning: "#606DE0",
        textGray: "#686868",
      },
      screens: {
        md: "376px",
      },
    },
  },
};
