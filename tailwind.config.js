/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";


export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			custom: 'rgba(36, 32, 32, 0.6)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			],
  			droid: [
  				'Droid Sans',
  				'sans-serif'
  			],
  			comfortaa: [
  				'Comfortaa',
  				'sans-serif'
  			],
  			playfair: [
  				'Playfair Display',
  				'sans-serif'
  			],
  			charm: [
  				'Charm',
  				'cursive'
  			],
  			italic: [
  				'Roboto',
  				'sans-serif'
  			],
  			shalimar: [
  				'Shalimar',
  				'cursive'
  			],
  			romanesco: [
  				'Romanesco',
  				'cursive'
  			],
  			im: [
  				'Island Moments',
  				'cursive'
  			],
  			raleway: [
  				'Raleway',
  				'cursive'
  			]
  		},
  		perspective: {
  			'1000': '1000px'
  		},
  		transformStyle: {
  			preserve3d: 'preserve-3d'
  		},
  		backfaceVisibility: {
  			hidden: 'hidden'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    flowbite.plugin(),
      require("tailwindcss-animate")
],
};
