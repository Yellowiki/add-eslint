module.exports = {
  extends: ['airbnb', 'xo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'react/jsx-uses-vars': 'error',
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-constant-condition': 'off',
    'no-await-in-loop': 'off',
  },
  parser: 'babel-eslint',
  globals: {
    React: true,
  },
}
