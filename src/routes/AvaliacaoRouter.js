import express from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/avaliacao", AvaliacaoController.listarTodasAvaliacoes);
router.get("/avaliacao/:id", AvaliacaoController.buscarAvaliacaoPorId);
router.post("/avaliacao", AvaliacaoController.cadastrarAvaliacao);
router.put("/avaliacao/:id", AvaliacaoController.atualizarAvaliacao);
router.delete("/avaliacao/:id", AvaliacaoController.deletarAvaliacao);

export default router;