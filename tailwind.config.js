/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#334EFF",
        darkgrey: "#514F4F",
        grey: "#959292",
        blackGrey: "#373737",
      },
      keyframes: {
        slideInUp: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%,1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,0px)",
          },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        spinCustom: {
          "100%": { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
        catcher: {
          "100%": {
            left: "100%",
            transform: "translateX(-75%) scale(.5,1) ",
          },
        },
        slideRight: {
          "100%": {
            left: "0%",
          },
        },
      },
      screens: {
        xxsm: "380px",
        xsm: "480px",
      },
    },
  },
  plugins: [],
};
