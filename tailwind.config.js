module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "570px",
      md: "760px",
      lg: "990px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        "home-pattern":
          "linear-gradient(to right bottom, rgba(17, 24, 39, 0.8), rgba(17, 24, 39,0.9)), url(../src/assets/img/home.png)",
      },
    },
  },
  plugins: [],
};
