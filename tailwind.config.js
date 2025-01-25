const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      btnGradient: {
        bg: "bg-gradient-to-tr from-amber-200 to-yellow-300",
      },
      padding: {
        btn: "11rem 1.5rem", // Custom button padding (top-bottom: 1rem, left-right: 1.5rem)
      },
      backgroundColor: {
        primary: "#000000", // Custom primary color (dark blue)
        secondary: "#ffcd42", // Custom secondary color (amber)
        accent: "#e879f9", // Custom accent color (teal)
      },
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#000000", // Primary button base color (e.g., blue)
          hover: "#ffcd42", // Darker shade for hover state
          active: "#e879f9", // Even darker shade for active state
        },
      },
      animation: {
        spin360: "spin360 1s linear infinite", // Custom animation for full-circle rotation
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      fontSize: {
        sm: ["0.8rem", "1rem", "-0.02em"], // Small letter-spacing (tight)
        base: ["1em", "1.5rem", "-0.01em"], // Slightly tight spacing
        xl: ["1.5rem", "2", "0"], // Neutral spacing
        "2xl": ["2em", "2.5rem", "0.01em"], // Slightly wide spacing
        "3xl": ["3rem", "3.5rem", "0.02em"], // Wider spacing
        "4xl": ["4rem", "4.5rem", "0.03em"], // Even wider spacing
        "5xl": ["5rem", "5.5rem", "0.04em"], // Wide letter-spacing
        "6xl": ["6rem", "6.5rem", "0.05em"], // Very wide letter-spacing
        "7xl": ["7rem", "7.5rem", "0.06em"], // Extra wide letter-spacing
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "1rem", lineHeight: "1.4rem", color: "#000" },
      });
    }),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen xl": {
            maxWidth: "1060px",
          },
        },
      });
    },
  ],
};
