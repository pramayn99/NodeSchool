const http = require('http')
const url = require('url')


function getParsedTime(isoTime){
    let time = new Date(isoTime);
    let timeObject =  {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    } 

    return JSON.stringify(timeObject)
}

function getUnixTime(unixTime){
    let unixDate =  {
        "unixtime":new Date(unixTime).getTime()
    }

    return JSON.stringify(unixDate)
}

const server = http.createServer((req,res)=>{
    let parsedUrl = url.parse(req.url)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if(parsedUrl.pathname === '/api/parsetime')
    {
        res.end(getParsedTime(parsedUrl.query.split('=')[1]))
    }
    else{
        res.end(getUnixTime(parsedUrl.query.split('=')[1]))
    }

})


server.listen(process.argv[2],() => {
    console.log("Server is up and running!")
})