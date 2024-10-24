// Importa o módulo Express para criar as rotas.
const express = require("express");
// Importa o controlador de usuários.
const usuarioController = require ("../controllers/UsuarioController.js");

// Cria um roteador Express.
const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/usuario", usuarioController.listarTodos);
router.get("/usuario/:id", usuarioController.buscarUsuarioPorId);
router.post("/usuario", usuarioController.cadastraUsuario);
router.put("/usuario/:id", usuarioController.atualizarUsuario);
router.delete("/usuario/:id", usuarioController.deletarUsuario);

// Exporta o roteador configurado como padrão.
module.exports = router;
