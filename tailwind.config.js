//auto generates the css into output.css files of styles folder in components, pages & layouts

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./layouts/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}