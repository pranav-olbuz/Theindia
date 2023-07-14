/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'museo': ['Museo Sans', 'sans-serif'],
        'futura': ['Futura Hv BT', 'sans-serif'],
      },
      container:{
        center: true,
      },
      boxShadow: {
        custom: '0 8px 13px rgba(0,0,0,0.2)',
      },
      colors: {
        'black': '#1e1e1e',
        'orange' : '#EC4F4F'
      },
    },
  },
  plugins: [],
}