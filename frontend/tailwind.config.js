/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-voilet':"#11031c",
        'light-purple':'#e9d7f7',
        'custom-red':'#F04C4C'
      }
    },
  },
  plugins: [],
}