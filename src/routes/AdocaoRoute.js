import express from "express";
import AdocaoController from "../controllers/AdocaoController.js";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/", AdocaoController.listarTodasAdocoes);
router.get("/:id", AdocaoController.buscarAdocaoPorId);
router.post("/", AdocaoController.cadastrarAdocao);
router.put("/:id", AdocaoController.atualizarAdocao);
router.delete("/:id", AdocaoController.deletarAdocao);

export default router;