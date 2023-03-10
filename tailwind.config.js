/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/styles/global.css",
    ],
    theme: {
        screens:{
          sm: '600px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
          xxl: '1536px'
        },
    },
    plugins: [],
  }