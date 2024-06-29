const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f0f2f9",
        "dark-gray": "#656e83",
        "black": "#4a5162",
        "t-light-gray": "#828ba2",
        "t-blue": "#1b91f0",
      }
    },
  },
  plugins: [require("daisyui"), addDynamicIconSelectors()],
};
