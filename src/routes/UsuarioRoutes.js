const express = require('express');
const usuarioController = require('../controllers/UsuarioController');
const upload = require('../middleware/upload');  // Middleware para upload de arquivos

const router = express.Router();

// Rota para criar um usuário com upload de foto
router.post('/usuarios', upload.single('foto'), usuarioController.criarUsuario);

// Rota para listar todos os usuários
router.get('/usuarios', usuarioController.buscarTodosUsuarios);

// Rota para buscar um usuário por ID
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);

// Rota para atualizar um usuário por ID
router.put('/usuarios/:id', usuarioController.atualizarUsuario);

// Rota para excluir um usuário por ID
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;
