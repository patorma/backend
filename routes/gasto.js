const express = require('express')
const { check } = require('express-validator');
const { addGasto, viewGastos, viewGastoById, modificaGastoById, deleteGasto } = require('../controller/gastoController')
const api = express.Router()

//Agregar gasto 
api.post('/', [check('tipoGasto').isLength({ min: 2 }), check('descripcion').isLength({ min: 10 })], addGasto)

//Mostrar todos los gastos
api.get('/', viewGastos)

//Mostrar detalle de un gasto
api.get('/:id', viewGastoById)

//Modificar datos de un gasto
api.put('/:id', modificaGastoById)

//Elimar un gasto
api.delete('/:id', deleteGasto)
module.exports = api