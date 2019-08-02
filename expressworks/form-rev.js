const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form',(req,res) => {
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])