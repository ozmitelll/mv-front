/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        'main':'#235379',
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "urbanist":['Urbanist', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

