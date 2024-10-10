// routes/asmaRoutes.js
const express = require('express');
const router = express.Router();
const asmaController = require('../controllers/asmaController');

router.post('/', asmaController.criarAsma);
router.get('/:email', asmaController.buscarAsmaPorEmail);

module.exports = router;
