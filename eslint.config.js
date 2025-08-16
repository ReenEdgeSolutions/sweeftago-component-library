import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Base config for all files
    files: ["/.{js,mjs,cjs}"],
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
    files: ["src/**/.ts"],
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
    rules: {
      camelcase: "error",
      "no-duplicate-imports": "error",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "error",
      "no-alert": "error",
      "@typescript-eslint/no-empty-function": "error",
      "react/no-unknown-property": "off",
      "react/no-unescaped-entities": "off",
      "padding-line-between-statements": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
];