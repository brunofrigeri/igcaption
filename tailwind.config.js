const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontWeight: 700,
          fontSize: theme("fontSize.4xl"),
        },
        h2: {
          fontWeight: 600,
          fontSize: theme("fontSize.xl"),
        },
        h3: {
          fontWeight: 500,
          fontSize: theme("fontSize.xl"),
        },
        h4: {
          fontWeight: 300,
          fontSize: theme("fontSize.lg"),
        },
        h5: {
          fontWeight: 300,
          fontSize: theme("fontSize.tiny"),
        },
        p: {
          fontSize: theme("fontSize.tiny"),
        },
        li: {
          fontWeight: 300,
          fontSize: theme("fontSize.tiny"),
        },
      });
    }),
  ],
};
