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
        'primaria' : '#eae2b7', //panna
        'secondo' :'#001d3d ', //blue
        'terzo' :'#eec643', //giallo 
      }
    },

    backgroundImage: {
      'img1': "url('https://www.visitmodena.it/en/discover-modena/itineraries-and-routes/discovering-the-flowers-around-modena/alla-scoperta-del-sito-unesco-di-modena/@@images/82763e5b-1266-4d0b-88b0-d17ab46253ca.jpeg')",
      'homeImg1': "url('https://media.istockphoto.com/id/1298644676/it/foto/edificio-del-municipio-al-crepuscolo-di-modena-italia.jpg?s=612x612&w=0&k=20&c=yPL14qUAVnZNnpnYsCk2iegkxEZgeUm6xV60zRMDGBI=')",
      'homeImg2': "url('https://tourismmedia.italia.it/is/image/mitur/20210310112348-shutterstock-1765880312?wid=1080&hei=660&fit=constrain,1&fmt=webp')",
      'homehwb(49 42% 10%)"url('https://blog.vantagecircle.com/content/images/2023/07/Featured-Image-Light-1.png')",
    
    }
  },
  plugins: [],
}
