import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },

  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: ["dist/"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
        ecmaFeatures: {
          tsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
  },

  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      "camelcase": "error",
      "no-duplicate-imports": "off",
      "no-console": "off",
      "no-alert": "error",
      "padding-line-between-statements": "off",

      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": ["error", {
        "allow": ["arrowFunctions", "functions", "methods"]
      }], 
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      "react/no-unknown-property": "off",
      "react/no-unescaped-entities": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
];