const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    nombre_del_puesto:{
        type: String,
        required: [true, 'El nombre del puesto es requerido']
    },
    anios_servicio:{
        type: Number,
        required: [true, 'Los años de servicio son requeridos']
    },
    hora_entrada: {
        type: Number,
        required: [true, 'La hora de entrada es obligatoria']
    },
    hora_salida: {
        type: Number,
        required: [true, 'La hora de salida es obligatoria']
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);