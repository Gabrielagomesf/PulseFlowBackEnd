const mongoose = require('mongoose');

const MedicoSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    telefonePessoal: String,
    email: { type: String, unique: true },
    senha: String,
    crm: String,
    areaAtuacao: String,
    enderecoConsultorio: String,
    enderecoConsultorio2: String,
    telefoneConsultorio: String,
});

module.exports = mongoose.model('Medico', MedicoSchema);
