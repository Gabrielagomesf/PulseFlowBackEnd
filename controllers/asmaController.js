// controllers/AsmaController.js
const Asma = require('../models/Asma');
const Paciente = require('../models/Paciente');

exports.criarAsma = async (req, res) => {
    const { dataCrise, horaCrise, tempoDuracaoCrise, intensidadeCrise, horarioMedicao, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novoRegistro = new Asma({
            dataCrise,
            horaCrise,
            tempoDuracaoCrise,
            intensidadeCrise,
            horarioMedicao,
            email,
        });

        await novoRegistro.save();
        res.status(201).json(novoRegistro);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro de asma: ${error.message}`);
    }
};

exports.buscarAsmaPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const registros = await Asma.find({ email });
        
        if (registros.length === 0) {
            return res.status(404).send('Nenhum registro de asma encontrado para este email.');
        }

        res.json(registros);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros de asma: ${error.message}`);
    }
};
