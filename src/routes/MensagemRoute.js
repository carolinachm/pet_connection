import express from "express";
import MensagemController from "../controllers/MensagemController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/mensagem", MensagemController.listarTodasMensagens);
router.get("/mensagem/:id", MensagemController.buscarMensagemPorId);
router.post("/mensagem", MensagemController.cadastrarMensagem);
router.put("/mensagem/:id", MensagemController.atualizarMensagem);
router.delete("/mensagem/:id", MensagemController.deletarMensagem);

export default router;