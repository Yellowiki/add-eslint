const deepAssign = require('deep-assign')

const config = require('.')

module.exports = deepAssign(config, {
  rules: {
    'no-unused-vars': 'off',
    'typescript/no-var-requires': 'error',
    'no-useless-constructor': 'off',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-member-accessibility': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'none' }],
    'typescript/member-naming': [
      'error',
      {
        private: '^_',
      },
    ],
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-inferrable-types': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-type-alias': [
      'error',
      {
        allowAliases: true,
      },
    ],
    'typescript/no-unused-vars': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'error',
    'no-param-reassign': 'off',
    'no-useless-constructor': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'typescript/no-use-before-define': 'off',
    'no-undef': 'off',
    'typescript/adjacent-overload-signatures': 'off',
  },
})
