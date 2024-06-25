/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f0f2f9",
        "dark-gray": "#656e83",
        "t-light-gray": "#828ba2"
      }
    },
  },
  plugins: [require("daisyui")],
};
