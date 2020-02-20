module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
      '@typescript-eslint/eslint-plugin',
      'jest',
  ],
  extends: [
    'airbnb-typescript/base',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'max-classes-per-file': 'off',
  },
};
