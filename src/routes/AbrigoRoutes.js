const express = require('express');
const AbrigoController = require('../controllers/AbrigoController');

const router = express.Router();

// Rota para criar um abrigo com upload de foto
router.post('/abrigos',  AbrigoController.criarAbrigo);

// Rota para listar todos os abrigos
router.get('/abrigos', AbrigoController.buscarTodosAbrigos);

// Rota para buscar um abrigos por ID
router.get('/abrigos/:id', AbrigoController.buscarAbrigoPorId);

// Rota para atualizar um abrigos por ID
router.put('/abrigos/:id', AbrigoController.atualizarAbrigo);

// Rota para excluir um abrigos por ID
router.delete('/abrigos/:id', AbrigoController.excluirAbrigo);

module.exports = router;
