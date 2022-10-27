/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        primary: "#17AEBF",
        secondary: "#D94A64",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        tertiary: "#D94A98",
        background:"#121418"
      },
      fontFamily: {        
        monument: ["MonumentExtendedRegular", "sans-serif"],
        monumentbold : ["MonumentExtendedBold", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        monumentlight : ["MonumentExtendedLight", "sans-serif"],

      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1250px",
      xl: "1700px",
    },
  },
  plugins: [],
};