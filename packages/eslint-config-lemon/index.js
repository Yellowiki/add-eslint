module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'typescript'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
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
    'global-require': 'off',
    'no-useless-constructor': 'error',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/*.config.js',
          '**/*.config.*.js',
          '**/wallaby.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
        ],
        optionalDependencies: false,
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: ['constructors', 'arrowFunctions'],
      },
    ],
  },
  parser: 'typescript-eslint-parser',
  globals: {
    React: true,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
