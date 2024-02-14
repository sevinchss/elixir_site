/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'sans': ['Open-Sans', 'sans-serif'],
    }
    
  },
  backgroundImage: {
    'hero-pattern': "url('../hero/hero images/header-5.jpg')",
  },
  plugins: [],
}
)
