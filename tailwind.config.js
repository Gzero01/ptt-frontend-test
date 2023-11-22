/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#0DBEFF",
        purple: "#7e5bef",
      },
      boxShadow: {
        normal: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
