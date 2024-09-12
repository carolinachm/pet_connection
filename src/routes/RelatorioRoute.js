import express from "express";
import RelatorioController from "../controllers/RelatorioController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/relatorio", RelatorioController.listarTodosRelatorios);
router.get("/relatorio/:id", RelatorioController.buscarRelatorioPorId);
router.post("/relatorio", RelatorioController.cadastrarRelatorio);
router.put("/relatorio/:id", RelatorioController.atualizarRelatorio);
router.delete("/relatorio/:id", RelatorioController.deletarRelatorio);

export default router;