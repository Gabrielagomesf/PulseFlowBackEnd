const express = require('express');
const router = express.Router();
const passwordResetController = require('../controllers/passwordResetController');

router.post('/reset', passwordResetController.recuperarSenha);

module.exports = router;
