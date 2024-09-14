import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope ']
});

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

export default [{
    ignores: [
        "**/.next",
        "**/coverage",
        "**/build",
        "**/node_modules",
        "**/out",
        "**/public",
    ],
}, ...fixupConfigRules(compat.extends(
  "airbnb",
  "airbnb/hooks",
  "airbnb-typescript",
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:jest/recommended",
  "plugin:prettier/recommended",
  "plugin:unicorn/recommended",
)),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      jest: fixupPluginRules(jest),
      "jsx-a11y": fixupPluginRules(jsxA11Y),
      react: fixupPluginRules(react),
      unicorn: fixupPluginRules(unicorn),
      prettier: fixupPluginRules(prettier),
    },
  },
  {
    languageOptions: {
      globals: {
        ...GLOBALS_BROWSER_FIX,
        ...globals.jest,
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },

      parser: tsParser,
      ecmaVersion: 13,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        include: ["."],
        project: "./tsconfig.json",
      },
    },
  },
  {

    settings: {
        "import/resolver": {
            typescript: {
              alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
        },
    },

    rules: {
      "react/react-in-jsx-scope": 0,
      "arrow-body-style": [2, "as-needed"],
      "jest/no-mocks-import": 0,
      "no-duplicate-imports": 1,
      "import/exports-last": 0,
      "import/extensions": 0,
      "import/imports-first": 1,
      "import/no-cycle": 2,
      "import/no-duplicates": 0,
      "import/prefer-default-export": 0,

      "import/order": [1, {
        "newlines-between": "always",

        groups: [
          "builtin",
          "external",
          "type",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      }],

      semi: [2, "never"],
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/consistent-type-imports": 2,
      "@typescript-eslint/return-await": 0,
      "unicorn/no-empty-file": 1,

      "no-param-reassign": [2, {
        props: true,
        ignorePropertyModificationsFor: ["draft", "acc"],
      }],

      "react/display-name": 0,

      "react/jsx-props-no-spreading": [2, {
        exceptions: ["Component"],
      }],

      "react/jsx-sort-props": [2, {
        callbacksLast: true,
      }],

      "react/prop-types": 0,
      "react/require-default-props": 0,

      "react/function-component-definition": [2, {
        namedComponents: "arrow-function",
        unnamedComponents: "function-expression",
      }],

      "@typescript-eslint/naming-convention": [2, {
        format: ["PascalCase"],
        prefix: ["I"],
        selector: "interface",

        filter: {
          regex: "Window|ProcessEnv",
          match: false,
        },
      }, {
        format: ["PascalCase"],
        prefix: ["T"],
        selector: "typeAlias",
      }, {
        format: ["PascalCase"],
        selector: "typeLike",
      }],

      "max-lines": [2, 300],
      "sonarjs/no-duplicate-string": 0,
      "unicorn/consistent-destructuring": 0,
      "unicorn/expiring-todo-comments": 0,
      "unicorn/filename-case": 0,
      "unicorn/no-array-for-each": 0,
      "unicorn/no-document-cookie": 0,
      "unicorn/prefer-dom-node-text-content": 0,
      "unicorn/prefer-set-has": 0,
      "unicorn/no-array-reduce": 0,
      "unicorn/no-nested-ternary": 0,
      "unicorn/no-null": 0,
      "unicorn/number-literal-case": 0,
      "unicorn/explicit-length-check": 0,
      "unicorn/consistent-function-scoping": 0,
      "unicorn/prefer-node-protocol": 0,
      "unicorn/prefer-object-from-entries": 0,
      "unicorn/prevent-abbreviations": 0,
      "unicorn/switch-case-braces": 0,
      "unicorn/text-encoding-identifier-case": 0,

      "import/newline-after-import": 0,
      "import/no-mutable-exports": 0,
      "@typescript-eslint/no-extra-semi": 0,
        "@typescript-eslint/padding-line-between-statements": 0,
        "@typescript-eslint/semi": 0,
        "@typescript-eslint/no-throw-literal": 0,
        "@typescript-eslint/lines-between-class-members": 0,
        "react/no-unescaped-entities": 0,
        "unicorn/prefer-module": 0,
        "unicorn/prefer-top-level-await": 0,

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: [
                "**/__tests__/*.{ts,tsx}",
                "**/mocks/*.{ts,js}",
                "**/jest.setup.js",
                "**/jest.tsx",
                "**/lib/**",
                "**/*.spec.{ts,tsx}",
            ],
        }],
    },
}, {
    files: ["!src/types/**"],

    rules: {
        "no-restricted-imports": ["error", {
            patterns: [{
                group: ["@/types/*", "!@/types/index", "!@/types/enums"],
                message: "Import of private types is not allowed.",
            }],
        }],
    },
}, {
    files: ["!src/api/**"],

    rules: {
        "no-restricted-imports": ["error", {
            patterns: [{
                group: ["@/api/*", "!@/api/index"],
                message: "Import of internal api variables is not allowed.",
            }],
        }],
    },
}];
