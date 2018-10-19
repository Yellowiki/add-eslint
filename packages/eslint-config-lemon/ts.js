const deepAssign = require('deep-assign')

const config = require('.')

module.exports = deepAssign(config, {
  rules: {
    'no-unused-vars': 'error',
    'typescript/no-var-requires': 'error',
  },
})
