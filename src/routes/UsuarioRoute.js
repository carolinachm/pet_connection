// Importa o módulo Express para criar as rotas.
import express from "express";
// Importa o controlador de usuários.
import usuarioController from "../controllers/UsuarioController.js";

// Cria um roteador Express.
const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/", usuarioController.listarTodos);
router.get("/:id", usuarioController.buscarUsuarioPorId);
router.post("/", usuarioController.cadastraUsuario);
router.put("/:id", usuarioController.atualizarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);

// Exporta o roteador configurado como padrão.
export default router;
