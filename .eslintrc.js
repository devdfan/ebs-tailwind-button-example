module.exports = {
  root: true,
  globals: {
    process: true,
    module: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
};
