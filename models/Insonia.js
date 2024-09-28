const mongoose = require('mongoose');

const InsoniaSchema = new mongoose.Schema({
    data: Date,
    horaDormir: String,
    horaAcordar: String,
    quantQueAcordou: Number,
    qualidadeSono: String,
    email: String,
}, { collection: 'Insônia' });

module.exports = mongoose.model('Insonia', InsoniaSchema);
