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
      '2xl': {'max': '1535px'},
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
      colors:{
        'primaria' : '#2B1805',
        'secondaria' :'#e8f6ef63',
        'gradient1':'#279EFF',
        'gradient2':'#457b9d',
        'gradient3':'#a8dadc',
     
      }
    },

    backgroundImage: {
      'img1': "url('https://pedaliamoinitalia.it/wp-content/uploads/2022/09/New-tours-website-banner.png')",
      'homeImg1': "url('https://media.istockphoto.com/id/1362373123/it/foto/veduta-di-modena-in-italia.jpg?s=612x612&w=is&k=20&c=51hYfvNDZhudf1_Bjrc0nae5OCQHn9gnSWF44UUTetg=')",
    }
  },
  plugins: [],
}
