const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: Date,
    cpf: String,
    telefonePessoal: String,
    email: { type: String, unique: true },
    senha: String
});

module.exports = mongoose.model('Paciente', PacienteSchema);
