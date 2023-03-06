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
        'color-2': '#85868f',
        'color-3': '#17181f',
        'color-4': '#d2d3dc',
        'color-5': '#afb1b7',
        'color-6': '#1d1e26'
      },
      backgroundImage: {
        'add_button': 'url("/assets/icons/add_button.svg")',
        'check': 'url("/assets/icons/check.svg")',
        'menu': 'url("/assets/icons/menu.svg")'
      }
    },
  },
  plugins: [],
}
