const express = require('express')
const app = express()


app.get('/search',(req,res) => {
    let data = req.query;
    res.end(JSON.stringify(data))
})

app.listen(process.argv[2])