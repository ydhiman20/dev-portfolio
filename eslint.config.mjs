import pluginJs from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import globals from "globals";
/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    ignores: [
      ".next/", // Exclude the entire .next folder
      "tailwind.config.mjs",
      "tailwind.config.js",
      "postcss.config.js",
      "dist/",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly", // Add `process` as a global variable
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },

    plugins: {
      perfectionist,
      react,
    },
    rules: {
      "no-undef": "warn",
      "no-undef-init": "error",
      "no-unused-vars": "warn",
      "perfectionist/sort-jsx-props": "error",
      "perfectionist/sort-modules": "error",
      "perfectionist/sort-named-imports": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      semi: "error",
    },
  },
];
