const mongoose = require('mongoose');

const CicloMenstrualSchema = new mongoose.Schema({
    dataInicial: Date, 
    dataFinal: Date,   
    email: String,       
},  { collection: 'Ciclo Menstrual' });

module.exports = mongoose.model('CicloMenstrual', CicloMenstrualSchema);