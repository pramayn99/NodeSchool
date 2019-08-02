const http = require('http')
const map = require('through2-map')
const fs = require('fs')

const server = http.createServer( (req,res) => {
    if(req.method == "POST"){

       req.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase()
        })).pipe(res);
    }
})

server.listen(process.argv[2],() => {
    console.log("Server is up and running!!");
})