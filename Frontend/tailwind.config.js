/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js,tsx}"
  ],  
  theme: {
    screens: {
      //everything under these px will ...
      '2xl': {'max': '1590px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1440px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {  
      zIndex: {
        '1000': '1000',
      },
      colors:{
        'primaria' : '#eae2b7', //blue
        'secondo' :'#001d3d ', //panna
        'terzo' :'#eec643' //giallo    
      }
    },

    backgroundImage: {
      'img1': "url('https://www.visitmodena.it/en/discover-modena/itineraries-and-routes/discovering-the-flowers-around-modena/alla-scoperta-del-sito-unesco-di-modena/@@images/82763e5b-1266-4d0b-88b0-d17ab46253ca.jpeg')",
      'homeImg1': "url('https://media.istockphoto.com/id/1362373123/it/foto/veduta-di-modena-in-italia.jpg?s=612x612&w=is&k=20&c=51hYfvNDZhudf1_Bjrc0nae5OCQHn9gnSWF44UUTetg=')",
    }
  },
  plugins: [],
}
