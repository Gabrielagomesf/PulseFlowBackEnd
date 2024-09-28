const mongoose = require('mongoose');

const HormonalSchema = new mongoose.Schema({
    data: Date,
    hormonio: String,
    dosagem: Number,
    email: String,
},  { collection: 'Hormônios' });

module.exports = mongoose.model('Hormonal', HormonalSchema);
