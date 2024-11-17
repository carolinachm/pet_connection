const express = require('express');
const DoacaoController = require('../controllers/DoacaoController');

const router = express.Router();

// Rota para criar um Doacao com upload de foto
router.post('/doacoes',  DoacaoController.criarDoacao);

// Rota para listar todos os Doacaos
router.get('/doacoes', DoacaoController.buscarTodosDoacoes);

// Rota para buscar um Doacaos por ID
router.get('/doacoes/:id', DoacaoController.buscarDoacoesPorId);

// Rota para atualizar um Doacaos por ID
router.put('/doacoes/:id', DoacaoController.atualizarDoacao);

// Rota para excluir um Doacaos por ID
router.delete('/doacoes/:id', DoacaoController.excluirDoacao);

module.exports = router;
