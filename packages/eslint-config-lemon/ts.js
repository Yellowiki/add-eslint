const deepAssign = require('deep-assign')

const config = require('.')

module.exports = deepAssign(config, {
  rules: {
    'no-unused-vars': 'off',
    'typescript/no-var-requires': 'error',
  },
})

console.log(module.exports)
