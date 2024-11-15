const express = require('express');
const ApadrinhamentoController = require('../controllers/ApadrinhamentoController');

const router = express.Router();

// Rota para criar um apadrinhamento com upload de foto
router.post('/apadrinhamentos',  ApadrinhamentoController.criarApadrinhamento);

// Rota para listar todos os apadrinhamento
router.get('/apadrinhamentos', ApadrinhamentoController.buscarTodosApadrinhamentos);

// Rota para buscar um apadrinhamento por ID
router.get('/apadrinhamentos/:id', ApadrinhamentoController.buscarApadrinhamentoPorId);

// Rota para atualizar um apadrinhamento por ID
router.put('/apadrinhamentos/:id', ApadrinhamentoController.atualizarApadrinhamento);

// Rota para excluir um apadrinhamento por ID
router.delete('/apadrinhamentos/:id', ApadrinhamentoController.excluirApadrinhamento);

module.exports = router;
