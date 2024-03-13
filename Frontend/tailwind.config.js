/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js,tsx}"
  ],  
  theme: {
    extend: {
      colors:{
        'primaria' : '#FFC93C',
        'secondaria' :'#e8f6ef63',
        'gradient1':'#279EFF',
        'gradient2':'#457b9d',
        'gradient3':'#a8dadc',
     
      }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

