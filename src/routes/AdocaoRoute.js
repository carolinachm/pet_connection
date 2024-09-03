import express from "express";
import AdocaoController from "../controllers/AdocaoController.js";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/adocao", AdocaoController.listarTodasAdocoes);
router.get("/adocao/:id", AdocaoController.buscarAdocaoPorId);
router.post("/adocao", AdocaoController.cadastrarAdocao);
router.put("/adocao/:id", AdocaoController.atualizarAdocao);
router.delete("/adocao/:id", AdocaoController.deletarAdocao);

export default router;