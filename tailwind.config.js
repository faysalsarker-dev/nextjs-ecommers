/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000FF", // Pure Blue for primary actions
        lightGray: "#F5F5F5", // Light Gray for backgrounds
        white: "#FFFFFF", // White for contrast
        darkGray: "#333333", // Dark Gray for text
        lightBlue: "#ADD8E6", // Light Blue for hover effects
        skyBlue: "#87CEEB", // Sky Blue for subtle backgrounds
        accentOrange: "#FF7F00", // Orange for CTAs and promotions
        black: "#000000", // Black for prominent text
      },
    },
  },
  plugins: [],
});
