const express = require('express')
    /* const bodyParser = require('body-parser') */
const app = express()
const gasto = require('./routes/gasto')

app.use(express.json())
app.use('/api/gastos/', gasto)

module.exports = app