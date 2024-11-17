const express = require('express');
const MensagemController = require('../controllers/MensagemController');
const router = express.Router();


router.post('/mensagens', MensagemController.criarMensagem);
router.get('/mensagens', MensagemController.buscarTodasMensagens);
router.get('/mensagens/:id', MensagemController.buscarMensagemPorId);
router.put('/mensagens/:id', MensagemController.atualizarMensagem);
router.delete('/mensagens/:id', MensagemController.excluirMensagem);

module.exports = router;