const fs = require('fs')

const fileData = fs.readFileSync(process.argv[2])
console.log(fileData.toString().split('\n').length-1)