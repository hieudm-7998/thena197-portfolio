/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // container: {
      //   padding: {
      //     DEFAULT: "1rem",
      //   },

      // },
      container: {
        center: true,
        screens: {
          lg: "798px",
          xl: "798px",
        },
        padding: {
          DEFAULT: "1rem",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
