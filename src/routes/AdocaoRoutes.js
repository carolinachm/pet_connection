const express = require('express');
const AdocaoController = require('../controllers/AdocaoController');

const router = express.Router();

router.post('/adocoes', AdocaoController.criarAdocao);
router.get('/adocoes', AdocaoController.buscarTodasAdocoes);

module.exports = router;