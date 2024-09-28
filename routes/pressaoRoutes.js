const express = require('express');
const router = express.Router();
const PressaoController = require('../controllers/PressaoController');

router.post('/', PressaoController.criarPressao);
router.get('/:email', PressaoController.buscarPressaoPorEmail);

module.exports = router;
