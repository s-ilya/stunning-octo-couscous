module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'jest'],
  rules: {},
};
