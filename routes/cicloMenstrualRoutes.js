const express = require('express');
const router = express.Router();
const CicloMenstrualController = require('../controllers/cicloMenstrualController');

router.post('/', CicloMenstrualController.criarCicloMenstrual);
router.get('/:email', CicloMenstrualController.buscarCiclosPorEmail);

module.exports = router;
