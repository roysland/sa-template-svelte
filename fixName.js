const path = require("path");
const fs = require('fs')
const directoryName = path.basename(__dirname);
const pck = JSON.parse(fs.readFileSync('package.json'))
pck.name = directoryName
fs.writeFileSync('package.json', JSON.stringify(pck, null, 2))