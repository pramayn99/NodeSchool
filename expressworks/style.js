const express = require('express')
const stylus = require('stylus')
const path = require('path')
const app = express()


app.use(stylus.middleware(process.argv[3]))
app.use(express.static(process.argv[3]))

app.listen(process.argv[2])

