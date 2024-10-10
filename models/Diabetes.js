// models/Diabetes.js
const mongoose = require('mongoose');

const DiabetesSchema = new mongoose.Schema({
    data: Date,
    nivelGlicemia: Number,
    hora: String,
    email: String,
}, { collection: 'Diabetes' });

module.exports = mongoose.model('Diabetes', DiabetesSchema);
