// routes/diabetesRoutes.js
const express = require('express');
const router = express.Router();
const diabetesController = require('../controllers/diabetesController');

router.post('/', diabetesController.criarDiabetes);
router.get('/:email', diabetesController.buscarDiabetesPorEmail);

module.exports = router;
