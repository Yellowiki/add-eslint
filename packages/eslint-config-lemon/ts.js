const mergeOptions = require('merge-options')

const config = require('.')

module.exports = mergeOptions({}, config, {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-useless-constructor': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './',
    extraFileExtensions: ['.vue'],
  },
})
