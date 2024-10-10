// routes/enxaquecaRoutes.js
const express = require('express');
const router = express.Router();
const enxaquecaController = require('../controllers/enxaquecaController');

router.post('/', enxaquecaController.criarEnxaqueca);
router.get('/:email', enxaquecaController.buscarEnxaquecaPorEmail);

module.exports = router;
