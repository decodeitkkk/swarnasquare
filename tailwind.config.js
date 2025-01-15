/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.2)", // Subtle white overlay
        secondary: "rgba(255, 244, 207, 0.55)", // Light beige
        custom: "rgba(36, 32, 32, 0.6)", // Dark shade for backgrounds
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        charm: ["Charm", "cursive"], // Decorative cursive font
        italic: ["Roboto", "sans-serif"], // Roboto Italic variant
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        preserve3d: "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
