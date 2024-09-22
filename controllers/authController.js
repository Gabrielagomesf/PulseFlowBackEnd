const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Medico = require('../models/Medico');
const Paciente = require('../models/Paciente');

// Registro Médico
exports.registrarMedico = async (req, res) => {
    const { nome, cpf, telefonePessoal, email, senha, crm, areaAtuacao, enderecoConsultorio, enderecoConsultorio2, telefoneConsultorio } = req.body;

    try {
        const medicoExistente = await Medico.findOne({ email });
        if (medicoExistente) {
            return res.status(400).send('Médico já registrado.');
        }

        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        const medico = new Medico({
            nome, cpf, telefonePessoal, email, senha: senhaHash, crm, areaAtuacao, enderecoConsultorio, enderecoConsultorio2, telefoneConsultorio
        });

        await medico.save();
        res.status(201).send('Médico registrado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao registrar médico.');
    }
};

// Registro Paciente
exports.registrarPaciente = async (req, res) => {
    const { nome, dataNascimento, cpf, telefonePessoal, email, senha } = req.body;

    try {
        const pacienteExistente = await Paciente.findOne({ email });
        if (pacienteExistente) {
            return res.status(400).send('Paciente já registrado.');
        }

        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        const paciente = new Paciente({ nome, dataNascimento, cpf, telefonePessoal, email, senha: senhaHash });

        await paciente.save();
        res.status(201).send('Paciente registrado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao registrar paciente.');
    }
};

// Login Médico
exports.loginMedico = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const medico = await Medico.findOne({ email });
        if (!medico) return res.status(400).send('Médico não encontrado.');

        const isMatch = await bcrypt.compare(senha, medico.senha);
        if (!isMatch) return res.status(400).send('Senha incorreta.');

        const token = jwt.sign({ id: medico._id }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Erro ao fazer login.');
    }
};

// Login Paciente
exports.loginPaciente = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const paciente = await Paciente.findOne({ email });
        if (!paciente) return res.status(400).send('Paciente não encontrado.');

        const isMatch = await bcrypt.compare(senha, paciente.senha);
        if (!isMatch) return res.status(400).send('Senha incorreta.');

        const token = jwt.sign({ id: paciente._id }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Erro ao fazer login.');
    }
};
