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
        'primary':'rgba(255, 255, 255, 0.2)',
        'secondary':'rgba(255, 244, 207, 0.55)',
        'custom':'rgba(36, 32, 32, 0.6)'
      },
      fontFamily: {
       charm: ['Charm', 'cursive'],
       italic: ['Roboto', 'italic'] 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}