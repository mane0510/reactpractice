/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      primary:"#ff8901",
      secoundry:"#fb923c"

    },
    extend: {
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem'

        }
      }
    },
  },
  plugins: [],
}