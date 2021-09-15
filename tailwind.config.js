const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        amber: colors.amber,
        sky: colors.sky,
        violet: colors.violet,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
