/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '16':'repeat(auto-fit,minmax(250px,1fr))'
      },
      fontFamily:{
        'conden':['Roboto Condensed']
      }
    },
  },
  plugins: [],
}

