/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beaver: "#9e7f66",
        codGray: "#111111",
        mirage: "#17192b",
        ebonyClay: "#242b37",
        shuttleGray: "#5c6779"
      },
      fontFamily: {
        league: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
