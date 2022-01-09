module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // boxShadow: {
      //   primary: "0px 8px 40px 2px rgba(85, 85, 85, 0.08)",
      //   secondary: "rgb(0 0 0 / 8%) 0px 1px 12px",
      //   booking: "0px 3px 9px rgba(0, 0, 0, 0.25)",
      // },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
