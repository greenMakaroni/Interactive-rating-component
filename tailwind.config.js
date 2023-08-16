/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        'elementIn': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
      },
      animation: {
        elementIn: 'elementIn 1s forwards'
      }
    },
  },
  plugins: [],
}