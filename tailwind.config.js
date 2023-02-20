/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        'header': '50px auto'
      },
      gridTemplateColumns: {
        'header': '60px 100px 100px auto 100px',
        'body': '200px auto'
      },
      colors: {
        'color-1': '#20212c',
        'color-2': '#90919a',
        'color-3': '#17181f',
      }
    },
  },
  plugins: [],
}
