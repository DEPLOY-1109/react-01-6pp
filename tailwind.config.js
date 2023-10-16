/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["*"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "white",
        second: "#090c31",
        third: "#5853ff",
        fourth: "rgb(44, 44, 44)",
        text2: "cursive",
        
      },
    },
  },
  plugins: [],
}

