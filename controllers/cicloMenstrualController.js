// controllers/CicloMenstrualController.js
const CicloMenstrual = require('../models/CicloMenstrual');
const Paciente = require('../models/Paciente');

// Criar Ciclo Menstrual
exports.criarCicloMenstrual = async (req, res) => {
    const { dataInicial, dataFinal, email } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });

        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }

        const novoCiclo = new CicloMenstrual({
            dataInicial,  
            dataFinal,    
            email,        
        });

        await novoCiclo.save();
        res.status(201).json(novoCiclo);
    } catch (error) {
        res.status(500).send(`Erro ao criar ciclo menstrual: ${error.message}`);
    }
};

exports.buscarCiclosPorEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        if (!pacienteExistente) {
            return res.status(404).send('Paciente não encontrado.');
        }
        const ciclosMenstruais = await CicloMenstrual.find({ email });
        if (ciclosMenstruais.length === 0) {
            return res.status(404).send('Nenhum ciclo menstrual encontrado para este email.');
        }
        res.json(ciclosMenstruais);
    } catch (error) {
        res.status(500).send(`Erro ao buscar ciclos menstruais: ${error.message}`);
    }
};