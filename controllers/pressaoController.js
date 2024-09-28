const Pressao = require('../models/Pressao');
const Paciente = require('../models/Paciente');

// Criar registro de pressão arterial
exports.criarPressao = async (req, res) => {
    const { data, pressao, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });

        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novaPressao = new Pressao({
            data,
            pressao,
            email,
        });

        await novaPressao.save();
        res.status(201).json(novaPressao);
    } catch (error) {
        res.status(500).send(`Erro ao criar registro de pressão arterial: ${error.message}`);
    }
};

// Buscar registros de pressão arterial por email
exports.buscarPressaoPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }
        const pressoes = await Pressao.find({ email });
        if (pressoes.length === 0) {
            return res.status(404).send('Nenhum registro de pressão arterial encontrado para este email.');
        }
        res.json(pressoes);
    } catch (error) {
        res.status(500).send(`Erro ao buscar registros de pressão arterial: ${error.message}`);
    }
};
