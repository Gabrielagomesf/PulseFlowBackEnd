// models/Enxaqueca.js
const mongoose = require('mongoose');

const EnxaquecaSchema = new mongoose.Schema({
    data: Date,
    hora: String,
    tempoDuracao: Number,
    intensidadeDor: Number,
    email: String,
}, { collection: 'Enxaquecas' });

module.exports = mongoose.model('Enxaqueca', EnxaquecaSchema);
