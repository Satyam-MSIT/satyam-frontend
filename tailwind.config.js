/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#334EFF",
        darkgrey: "#514F4F",
        grey: "#959292",
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
          "100%": {
            transform: "scale(1.1,2)",
          },
        },
      },
      screens: {
        xxsm: "380px",
        xsm: "520px",
      },
    },
  },
  plugins: [],
};