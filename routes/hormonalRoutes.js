const express = require('express');
const router = express.Router();
const hormonalController = require('../controllers/HormonalController');

router.post('/', hormonalController.criarHormonal);
router.get('/:email', hormonalController.buscarHormonalPorEmail);

module.exports = router;
