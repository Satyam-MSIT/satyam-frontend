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
