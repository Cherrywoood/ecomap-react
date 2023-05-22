/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      purple: {
        100: '#B3A4ED',
        600: '#423177'
      },
      green: {
        100: '#98DC4B',
        200: 'rgba(152, 220, 75, 0.8)',
        400: '#3f503f',
        500: '#425644',
        600: '#2F4531'
      },
      gray: {
        50: 'rgba(255, 255, 255, 0.85)',
        100: '#AAAAAA',
        200: '#808080',
        300: '#efefef',
        400: 'rgba(255, 255, 255, 0.5)',
        500: '#8D998E',
        600: '#8FA69B',
        800: 'rgba(23, 32, 24, 0.96)',
        900: 'rgba(23, 32, 24, 0.96)'
      },
      stone: {
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524'
      }
    },
    extend: {
    },
  },
  plugins: [],
}

