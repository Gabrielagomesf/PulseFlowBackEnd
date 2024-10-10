// models/Asma.js
const mongoose = require('mongoose');

const AsmaSchema = new mongoose.Schema({
    dataCrise: Date,
    horaCrise: String,
    tempoDuracaoCrise: Number,
    intensidadeCrise: Number,
    horarioMedicao: String,
    email: String,
}, { collection: 'Asmas' });

module.exports = mongoose.model('Asma', AsmaSchema);
