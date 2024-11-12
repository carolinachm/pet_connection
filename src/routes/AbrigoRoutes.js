const express = require('express');
const abrigoController = require('../controllers/AbrigoController');

const router = express.Router();

// Rota para criar um abrigo com upload de foto
router.post('/abrigos',  abrigoController.criarAbrigo);

// Rota para listar todos os abrigos
router.get('/abrigos', abrigoController.buscarTodosAbrigos);

// Rota para buscar um abrigos por ID
router.get('/abrigos/:id', abrigoController.buscarAbrigoPorId);

// Rota para atualizar um abrigos por ID
router.put('/abrigos/:id', abrigoController.atualizarAbrigo);

// Rota para excluir um abrigos por ID
router.delete('/abrigos/:id', abrigoController.excluirAbrigo);

module.exports = router;
