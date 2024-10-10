// controllers/DiabetesController.js
const Diabetes = require('../models/Diabetes');
const Paciente = require('../models/Paciente');

exports.criarDiabetes = async (req, res) => {
    const { data, nivelGlicemia, hora, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novoRegistro = new Diabetes({
            data,
            nivelGlicemia,
            hora,
            email,
        });

        await novoRegistro.save();
        res.status(201).json(novoRegistro);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro de diabetes: ${error.message}`);
    }
};

exports.buscarDiabetesPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const registros = await Diabetes.find({ email });
        
        if (registros.length === 0) {
            return res.status(404).send('Nenhum registro de diabetes encontrado para este email.');
        }

        res.json(registros);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros de diabetes: ${error.message}`);
    }
};
