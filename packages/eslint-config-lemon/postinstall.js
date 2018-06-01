const fs = require('fs-extra')
const path = require('path')

if (__dirname !== process.cwd()) {
  fs.copy(path.resolve(__dirname, 'node_modules'), 'node_modules/', {
    overwrite: false,
  })
}
