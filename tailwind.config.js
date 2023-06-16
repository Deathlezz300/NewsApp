/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '16':'repeat(auto-fit,minmax(450px,1fr))',
        '18':'repeat(auto-fit,minmax(350px,1fr))'
      },
      fontFamily:{
        'conden':['Roboto Condensed']
      }
    },
  },
  plugins: [],
}

