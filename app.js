const express = require('express');
const cors = require('cors');
/* const bodyParser = require('body-parser') */
const app = express();
const gasto = require('./routes/gasto');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/gastos/', gasto);

module.exports = app;