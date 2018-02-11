module.exports = {
  extends: ['airbnb', 'xo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': false,
    'jsx-a11y/anchor-is-valid': false,
    'jsx-a11y/label-has-for': false,
    'react/react-in-jsx-scope': false,
    'react/no-multi-comp': false,
    'react/jsx-filename-extension': false,
    'react/jsx-uses-vars': 'error',
    'react/prop-types': false,
  },
  parser: 'babel-eslint',
  globals: {
    React: true,
  },
}
