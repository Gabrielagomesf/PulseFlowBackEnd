const Insonia = require('../models/Insonia');
const Paciente = require('../models/Paciente');

// Criar registro de insônia
exports.criarInsonia = async (req, res) => {
    const { data, horaDormir, horaAcordar, quantQueAcordou, qualidadeSono, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });

        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novaInsonia = new Insonia({
            data,
            horaDormir,
            horaAcordar,
            quantQueAcordou,
            qualidadeSono,
            email,
        });

        await novaInsonia.save();
        res.status(201).json(novaInsonia);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro de insônia: ${error.message}`);
    }
};

// Buscar registros de insônia por email
exports.buscarInsoniasPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }
        const insonias = await Insonia.find({ email });
        if (insonias.length === 0) {
            return res.status(404).send('Nenhum registro de insônia encontrado para este email.');
        }
        res.json(insonias);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros de insônia: ${error.message}`);
    }
};
