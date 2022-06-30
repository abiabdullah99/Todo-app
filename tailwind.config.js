module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF014F",
          secondary: "#0D0D0D",
          neutral: "#ECF0F3",
          "base-100": "#ECF0F3",
          info: "#ff014d91",
          success: "#E449A4",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
