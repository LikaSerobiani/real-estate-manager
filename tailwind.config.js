/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firago: ["Firago", "sans-serif"],
      },
      colors: {
        primary: "#F93B1D",
        secondary: "#021526",
        white: "#FFFFFF",
        lightGray: "#808A93",
        darkGray: "#676E76",
        border: "#DBDBDB",
        success: "#45A849",
      },
    },
  },
  plugins: [],
};
