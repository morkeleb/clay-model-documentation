var fs = require('fs')
module.exports = JSON.parse(fs.readFileSync('generators/generator.json', 'utf8'))