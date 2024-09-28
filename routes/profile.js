const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Perfis
router.get('/medico/:id', profileController.perfilMedico);
router.get('/paciente/:id', profileController.perfilPaciente);

module.exports = router;
