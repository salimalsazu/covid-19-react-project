/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#f767e9",

        "secondary": "#6adb51",

        "accent": "#c1ce48",

        "neutral": "#1E192E",

        "base-100": "#FFFFF",

        "info": "#98CEEB",

        "success": "#22E2B9",

        "warning": "#B6940C",

        "error": "#E76E78",
      },
    },
  ],
  plugins: [require("daisyui")],
}