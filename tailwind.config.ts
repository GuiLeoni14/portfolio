/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      container: {
        padding: '1.5rem',
      },
      backgroundImage: {
        home: 'linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #09090A 90%);',
        card: 'linear-gradient(90deg, #000, rgba(0,0,0,0.97), rgba(0,0,0,0.8), transparent, rgba(0,0,0,0.6));',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [],
};