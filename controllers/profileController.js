const Medico = require('../models/Medico');
const Paciente = require('../models/Paciente');

// Perfil Médico
exports.perfilMedico = async (req, res) => {
    try {
        const medico = await Medico.findById(req.params.id).select('-senha');
        if (!medico) return res.status(404).send('Médico não encontrado.');

        res.json(medico);
    } catch (error) {
        res.status(500).send('Erro ao buscar perfil médico.');
    }
};

// Perfil Paciente
exports.perfilPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id).select('-senha');
        if (!paciente) return res.status(404).send('Paciente não encontrado.');

        res.json(paciente);
    } catch (error) {
        res.status(500).send('Erro ao buscar perfil paciente.');
    }
};
