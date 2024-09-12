import express from "express";
import HistoricoAdocaoController from "../controllers/HistoricoAdocaoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/historicoadocao", HistoricoAdocaoController.listarTodoshistoricosAdocao);
router.get("/historicoadocao/:id", HistoricoAdocaoController.buscarHistoricoAdocaoPorId);
router.post("/historicoadocao", HistoricoAdocaoController.cadastrarHistoricoAdocao);
router.put("/historicoadocao/:id", HistoricoAdocaoController.atualizarHistoricoAdocao);
router.delete("/historicoadocao/:id", HistoricoAdocaoController.deletarHistoricoAdocao);

export default router;