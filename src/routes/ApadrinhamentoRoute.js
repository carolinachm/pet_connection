import express from "express";
import ApadrinhamentoController from "../controllers/ApadrinhamentoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/apadrinhamento", ApadrinhamentoController.listarTodosApadrinhamento);
router.get("/apadrinhamento/:id", ApadrinhamentoController.buscarApadrinhamentoPorId);
router.post("/apadrinhamento", ApadrinhamentoController.cadastrarApadrinhamento);
router.put("/apadrinhamento/:id", ApadrinhamentoController.atualizarApadrinhamento);
router.delete("/apadrinhamento/:id", ApadrinhamentoController.deletarApadrinhamento);

export default router;