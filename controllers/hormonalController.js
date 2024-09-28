// controllers/HormonalController.js
const Hormonal = require('../models/Hormonal');
const Paciente = require('../models/Paciente');

exports.criarHormonal = async (req, res) => {
    const { data, hormonio, dosagem, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novoRegistro = new Hormonal({
            data,
            hormonio,
            dosagem,
            email,
        });

        await novoRegistro.save();
        res.status(201).json(novoRegistro);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro hormonal: ${error.message}`);
    }
};

exports.buscarHormonalPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const registros = await Hormonal.find({ email });
        
        if (registros.length === 0) {
            return res.status(404).send('Nenhum registro hormonal encontrado para este email.');
        }

        res.json(registros);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros hormonais: ${error.message}`);
    }
};
