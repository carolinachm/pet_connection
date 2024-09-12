import express from "express";
import DoacaoController from "../controllers/DoacaoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/doacao", DoacaoController.listarTodasDoacoes);
router.get("/doacao/:id", DoacaoController.buscarDoacaoPorId);
router.post("/doacao", DoacaoController.cadastrarDoacao);
router.put("/doacao/:id", DoacaoController.atualizarDoacao);
router.delete("/doacao/:id", DoacaoController.deletarDoacao);

export default router;