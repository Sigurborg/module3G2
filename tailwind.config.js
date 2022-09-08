/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255,0,0)',
        secondary: {
          100: '#ecc94b',
          200: '#000000'
        }
      },
      fontFamily: {
        body: ['Rubik']
      }
    },
  },
  plugins: [],
}

