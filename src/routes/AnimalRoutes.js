const express = require('express');
const AnimalController = require('../controllers/AnimalController');

const router = express.Router();

// Rota para criar um novo animal
router.post('/animais', AnimalController.criarAnimal);

// Rota para listar todos os animais
router.get('/animais', AnimalController.buscarTodosAnimais);

// Rota para buscar animal por ID
router.get('/animais/:id', AnimalController.buscaAnimaisPorId);

// Rota para atualizar animal
router.put('/animais/:id', AnimalController.atualizarAnimal);

// Rota para excluir animal
router.delete('/animais/:id', AnimalController.excluirAnimal);

module.exports = router;
