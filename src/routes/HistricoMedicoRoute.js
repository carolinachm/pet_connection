import express from "express";
import HistoricoMedicoController from "../controllers/HistoricoMedicoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/historicomedico", HistoricoMedicoController.listarTodosHistoricosMedico);
router.get("/historicomedico/:id", HistoricoMedicoController.buscarHistoricoMedicoPorId);
router.post("/historicomedico", HistoricoMedicoController.cadastrarHistoricoMedico);
router.put("/historicomedico/:id", HistoricoMedicoController.atualizarHistoricoMedico);
router.delete("/historicomedico/:id", HistoricoMedicoController.deletarHistoricoMedico);

export default router;