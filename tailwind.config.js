const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#212121",
        primaryBlue: "#00204A",
        secondaryBlue: "#005792",
        tertiaryBlue: "#448EF6",
        primaryYellow: "#FDB44B",
        customGrey: "#F5F5F5",
        customWhite: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
