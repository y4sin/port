/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: { 
        fontFamily:{
          'DM_sans' : ['DM Sans' , 'sans-serif' ],
          'beba': ['Bebas Neue', 'sans-serif'],
        
        
      },
      colors:{
        'bg_black': ' #171717',
      },
      screens:{
        'se':{'max': '480px'},
        'pc':{'min': '1580px'},
        'ipad':{'max': '920px'},
        'ipadm':{'max': '640px'},
        'uni':{'max': '800px'},

      }
    },
  },
  plugins: [],
}

