/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'primary':'rgba(255, 255, 255, 0.2)'
      },
      fontFamily: {
       charm: ['Charm', 'cursive'], 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}