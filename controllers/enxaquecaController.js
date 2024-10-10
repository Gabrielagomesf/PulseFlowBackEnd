// controllers/EnxaquecaController.js
const Enxaqueca = require('../models/Enxaqueca');
const Paciente = require('../models/Paciente');

exports.criarEnxaqueca = async (req, res) => {
    const { data, hora, tempoDuracao, intensidadeDor, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novoRegistro = new Enxaqueca({
            data,
            hora,
            tempoDuracao,
            intensidadeDor,
            email,
        });

        await novoRegistro.save();
        res.status(201).json(novoRegistro);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro de enxaqueca: ${error.message}`);
    }
};

exports.buscarEnxaquecaPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const registros = await Enxaqueca.find({ email });
        
        if (registros.length === 0) {
            return res.status(404).send('Nenhum registro de enxaqueca encontrado para este email.');
        }

        res.json(registros);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros de enxaqueca: ${error.message}`);
    }
};
