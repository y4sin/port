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
      }
    },
  },
  plugins: [],
}

