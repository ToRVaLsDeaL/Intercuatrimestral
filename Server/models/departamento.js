const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    nombre: {
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    numero_empleados:{
        type: Number,
        required: [true, 'El numero de empleados es obligatorio']
    },
    extension_telefonica: {
        type: Number,
        required: [true, 'La extension telefonica es obligatoria']
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Departamento', departamentoSchema); 