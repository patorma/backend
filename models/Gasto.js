const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Se ejecuta Schema como si fuera una funcion
const gastoSchema = new Schema({
    tipoGasto: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minlength: 2,
        maxlength: 80,
        enum: ['luz', 'telefono', 'agua', 'gas']
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 1000
    },
    valor: Number,
    fechaPagado: {
        type: String,
        trim: true
    },
    date: { type: Date, default: Date.now }

});

const Gasto = mongoose.model('gasto', gastoSchema);

module.exports = Gasto;