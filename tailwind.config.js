/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu Sans Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          50: "#ebf5ff",
          100: "#dbebff",
          200: "#bed9ff",
          300: "#97bfff",
          400: "#6e97ff",
          500: "#4c72ff",
          600: "#334eff",
          700: "#2036e2",
          800: "#1d31b6",
          900: "#20318f",
          950: "#131b53",
        },
        darkgrey: "#514F4F",
        grey: "#959292",
        blackGrey: "#373737",
        woodsmoke: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#171717",
        },
        "pale-sky": {
          50: "#f7f8f8",
          100: "#edeef1",
          200: "#d8dbdf",
          300: "#b6bac3",
          400: "#8e95a2",
          500: "#6b7280",
          600: "#5b616e",
          700: "#4a4e5a",
          800: "#40444c",
          900: "#383a42",
          950: "#25272c",
        },
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
