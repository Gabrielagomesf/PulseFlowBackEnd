const express = require('express');
const router = express.Router();
const InsoniaController = require('../controllers/InsoniaController');

router.post('/', InsoniaController.criarInsonia);
router.get('/:email', InsoniaController.buscarInsoniasPorEmail);

module.exports = router;
