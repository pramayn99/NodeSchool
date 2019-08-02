const http = require('http')
const fs = require('fs')

const source = fs.createReadStream(process.argv[3]);

const server = http.createServer((req,res)=>{
    source.pipe(res);
})

server.listen(process.argv[2], () => {
    console.log("Server is up and running.")
})