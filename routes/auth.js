const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro
router.post('/medico/registro', authController.registrarMedico);
router.post('/paciente/registro', authController.registrarPaciente);

// Login
router.post('/medico/login', authController.loginMedico);
router.post('/paciente/login', authController.loginPaciente);

module.exports = router;
