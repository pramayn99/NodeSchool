const fs = require('fs')

fs.readFile(process.argv[2],'utf-8',(err,fileContents)=>{
    if(err) throw err
    console.log(fileContents.split('\n').length-1)
})