/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
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
      backgroundColor: {
        primary: "#ff3d00", // Custom primary color (dark blue)
        secondary: "#ffcd42", // Custom secondary color (amber)
        accent: "#14B8A6", // Custom accent color (teal)
      },
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#ff3d00", // Primary button base color (e.g., blue)
          hover: "#ffcd42", // Darker shade for hover state
          active: "#e879f9", // Even darker shade for active state
        },
      },
      fontSize: {
        sm: ["0.8rem", "0.8rem"],
        base: ["1.2rem", "1.4rem"],
        xl: ["1rem", "1.2rem"],
        "2xl": ["1.2rem", "1.6rem"],
        "3xl": ["2rem", "2.5rem"],
        "4xl": ["3rem", "3.5rem"],
        "5xl": ["4.5rem", "5rem"],
      },
      fontFamily: {
        sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
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
