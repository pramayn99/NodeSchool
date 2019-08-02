const express = require('express')
const crypto = require('crypto')
const app = express()


app.put('/message/:id',(req,res) => {
    let id = req.params.id
    let x = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
    res.end(x);
})


app.listen(process.argv[2])