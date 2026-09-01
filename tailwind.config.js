/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': '#141414',
        'app-surface': '#1c1c1c',
        'brand-gold': '#d6a34a',
        'brand-orange': '#e05929',
        'brand-yellow': '#d9a036',
        'traffic-red': '#e73c3e',
        'traffic-green': '#65c466',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'], 
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}