/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gallery: "url('./src/main/Main/Parts/part images/gallery.jpg')",
        amenities: "url('./src/main/Main/Parts/part images/amneities.jpg')",
        sec_packages: "url('./src/main/Main/Parts/part images/packages.jpg')",
        cta: "url('./src/main/Main/Welcome/welcome images/cta.jpg')",
        footerImg: "url('./src/Layout/footer/footer images/footer-bg.jpg')",
        packages: "url('./src/Pages/Packages/packages image/1.jpg')",
        packages2: "url('./src/Pages/Packages/packages image/2.jpg')",
        packages3: "url('./src/Pages/Packages/packages image/3.jpg')",
        packages4: "url('./src/Pages/Packages/packages image/4.jpg')",
        packages5: "url('./src/Pages/Packages/packages image/5.jpg')",
        packages6: "url('./src/Pages/Packages/packages image/6.jpg')",
        carousel1: "url('https://prium.github.io/hideaway/assets/images/main-header-3.jpg')",
        carousel2: "url('https://prium.github.io/hideaway/assets/images/main-header-1.jpg')",
        carousel3: "url('https://prium.github.io/hideaway/assets/images/main-header-2.jpg')",
        carousel4: "url('https://prium.github.io/hideaway/assets/images/elements-header.jpg')",
        sec_youtube: "url('../src/main/Main/images/youtube.jpg')"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    colors: {
      color: 'rgba(0, 0, 0, 0.4',
    },
    fontFamily: {
      'Playfair': 'Playfair Display',
    },
  },
  plugins: [],
}
)
