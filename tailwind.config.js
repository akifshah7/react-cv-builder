// eslint-disable-next-line no-undef
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
        "text-light-gray": "#828ba2",
        "text-blue": "#1b91f0",
        "dark-blue": "#1677c2"
      }
    },
  },
  daisyui: {
    themes: ["light"]
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), addDynamicIconSelectors()],
};
