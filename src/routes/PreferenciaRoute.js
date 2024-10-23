import express from "express";
import PreferenciaController from "../controllers/PreferenciaController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/preferencia", PreferenciaController.listarTodasPrerencias);
router.get("/preferencia/:id", PreferenciaController.buscarPreferenciaPorId);
router.post("/preferencia", PreferenciaController.cadastrarPreferencia);
router.put("/preferencia/:id", PreferenciaController.atualizarPreferencia);
router.delete("/preferencia/:id", PreferenciaController.deletarPreferencia);

export default router;