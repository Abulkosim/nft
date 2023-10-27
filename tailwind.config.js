/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#A259FF",
      "darker-purple": "#A259FFDD",
      gray: "#3B3B3B",
      white: "#FFFFFF",
      "dark-gray": "#2B2B2B",
      whitish: "#FFFFFFDD",
    },
  },
  plugins: [],
};
