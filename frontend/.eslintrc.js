module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
};
