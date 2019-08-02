const express = require('express')
const fs = require('fs')
const app = express()


app.get('/books',(req,res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err;
        let ob = JSON.parse(data);
        res.end(JSON.stringify(ob));
    })
})

app.listen(process.argv[2])


