/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily:{
      'Bebas Neue':['"Bebas Neue"','cursive']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1220px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
  
}

