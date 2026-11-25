import html from '@html-eslint/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // Ignore generated folders/files
  {
    ignores: ['**/playwright-report/**', '**/test-results/**'],
  },

  // Browser JavaScript
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['playwright.config.cjs', 'tests/**/*.cjs'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Node.js (Playwright configuration)
  {
    files: ['playwright.config.cjs'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Playwright tests (Node.js + browser globals)
  {
    files: ['tests/**/*.cjs'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },

  // HTML
  {
    files: ['**/*.html'],
    plugins: { html },
    extends: ['html/recommended'],
    language: 'html/html',
    rules: {
      'html/require-closing-tags': ['error', { selfClosing: 'always' }],
    },
  },

  // Disable formatting rules handled by Prettier
  prettier,

  // HTML formatting rules handled by Prettier
  {
    files: ['**/*.html'],
    rules: {
      'html/attrs-newline': 'off',
      'html/element-newline': 'off',
      'html/indent': 'off',
      'html/no-extra-spacing-tags': 'off',
      'html/no-extra-spacing-text': 'off',
      'html/no-multiple-empty-lines': 'off',
      'html/no-trailing-spaces': 'off',
      'html/quotes': 'off',
    },
  },
]);
