const mongoose = require('mongoose');

const PressaoSchema = new mongoose.Schema({
    data: Date,
    pressao: Number,
    email: String,
},  { collection: 'Pressão Arterial' });

module.exports = mongoose.model('Pressao', PressaoSchema);