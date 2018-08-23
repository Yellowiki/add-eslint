const fs = require('fs-extra')
const path = require('path')

if (fs.existsSync(path.resolve(__dirname, '../../node_modules'))) {
  fs.copy(
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '../../node_modules'),
  )
}
