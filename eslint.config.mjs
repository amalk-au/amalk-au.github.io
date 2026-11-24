import html from '@html-eslint/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  // JavaScript
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
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

  // HTML (ESLint 10 configuration)
  {
    files: ['**/*.html'],
    plugins: { html },
    extends: ['html/recommended'],
    language: 'html/html',
    rules: {
      // Match Prettier's self-closing syntax for HTML void elements.
      'html/require-closing-tags': ['error', { selfClosing: 'always' }],
    },
  },

  // Disable formatting rules handled by Prettier
  prettier,

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
