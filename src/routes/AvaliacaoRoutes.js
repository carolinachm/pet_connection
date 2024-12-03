const express = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController');

const router = express.Router();

router.post('/avaliacoes', AvaliacaoController.criarAvaliacao);

router.get('/avaliacoes', AvaliacaoController.buscarTodosAvaliacoes);

router.get('/avaliacoes/:id', AvaliacaoController.buscarAvaliacaoPorId);

router.put('/avaliacoes/:id', AvaliacaoController.atualizarAvaliacao);

router.delete('avaliacoes/:id', AvaliacaoController.excluirAvaliacao);

module.exports = router;
