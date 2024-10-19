/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#a73fc8",
        "color-secondary":"#d78def",
        "color-accent":"#cf47fb",
        "color-background":"#faf6fb",
        "color-text":"#110d12",

      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
}

