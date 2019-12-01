const Gasto = require('../models/Gasto');
const { validationResult } = require('express-validator');

async function addGasto(req, res, next) {
    try {
        //validamos si estan correctos los parametros
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const gasto = new Gasto({
            tipoGasto,
            descripcion,
            valor,
            fechaPagado
        } = req.body);

        const result = await gasto.save();
        res.status(201).send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
        next();
    }
}

async function viewGastos(req, res, next) {
    try {
        const gastos = await Gasto.find();
        res.send(gastos);
    } catch (e) {
        res.status(500).send({ message: e.message });
        next();
    }
}

async function viewGastoById(req, res, next) {
    try {
        const gasto = await Gasto.findById(req.params.id);
        if (!gasto) return res.status(404).send('No hemos encontrado un gasto con ese ID');
        res.send(gasto);
    } catch (e) {
        res.status(500).send({ message: e.message });
        next();
    }
}

async function modificaGastoById(req, res, next) {
    try {
        const gasto = await Gasto.findByIdAndUpdate(req.params.id, {
            tipoGasto,
            descripcion,
            valor,
            fechaPagado
        } = req.body, {
            new: true
        });
        if (!gasto) { return res.status(404).send('El gasto con ese id no existe'); }
        res.status(204).send();

    } catch (e) {
        res.status(500).send({ message: e.message });
        next();
    }
}
async function deleteGasto(req, res, next) {
    try {
        const gasto = await Gasto.findByIdAndDelete(req.params.id);
        if (!gasto) {
            return res.status(404).send('El gasto con ese ID no esta, no se puede borrar');
        }
        res.status(200).send('Gasto borrado');
    } catch (e) {
        res.status(500).send({ message: e.message });
        next();
    }
}

module.exports = {
    addGasto,
    viewGastos,
    viewGastoById,
    modificaGastoById,
    deleteGasto
};