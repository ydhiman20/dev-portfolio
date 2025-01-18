import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next"),
  {
    ignores: [".next", "tailwind.config.mjs", ""], // Ignore the .next directory
  },
  {
    rules: {
      camelcase: ["error"],
      "sort-vars": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          array: true,
          object: true,
        },
      ],
      "no-useless-assignment": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      "no-useless-escape": "error",
      "no-undefined": "error",
      "no-console": "error",
      "no-alert": "error",
      "no-multi-spaces": ["error"],
      "no-unused-expressions": ["error", { enforceForJSX: true }],

      // React specific prop sorting rule
      "react/jsx-sort-props": [
        "error",
        {
          shorthandFirst: true, // Shorthand props come before regular props
          ignoreCase: false, // Case-sensitive sorting
          reservedFirst: true, // Ensure reserved props like ref, key come first
        },
      ],
    },
  },
];

export default eslintConfig;
