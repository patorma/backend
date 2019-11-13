const express = require('express')
const { check } = require('express-validator');
const { addGasto } = require('../controller/gastoController')
const api = express.Router()

api.post('/gastos', [check('tipoGasto').isLength({ min: 2 }), check('descripcion').isLength({ min: 10 })], addGasto)

module.exports = api