/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      container: {
        padding: '1.5rem',
      },
      backgroundImage: {
        'gradient-title': 'linear-gradient(to right, #fc00ff, #00dbde)',
        stars: `url('/img/bgstars.webp')`,
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
        blue: {
          900: '#0d1117',
        },
      },
    },
  },
  plugins: [],
}
