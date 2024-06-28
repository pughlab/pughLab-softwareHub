/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.ejs`], // all .html files
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

