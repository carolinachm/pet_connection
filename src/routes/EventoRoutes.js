const express = require('express');
const EventoController = require('../controllers/EventoController');

const router = express.Router();

// Rota para criar um evento com upload de foto
router.post('/eventos',  EventoController.criarEvento);

// Rota para listar todos os eventos
router.get('/eventos', EventoController.buscarTodosEventos);

// Rota para buscar um eventos por ID
router.get('/eventos/:id', EventoController.buscarEventoPorId);

// Rota para atualizar um eventos por ID
router.put('/eventos/:id', EventoController.atualizarEvento);

// Rota para excluir um eventos por ID
router.delete('/eventos/:id', EventoController.excluirEvento);

module.exports = router;
