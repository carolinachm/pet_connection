import express from "express";
import VisitaController from "../controllers/VisitaController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/visita", VisitaController.listarTodasVisitas);
router.get("/visita/:id", VisitaController.buscarVisitaPorId);
router.post("/visita", VisitaController.cadastrarVisita);
router.put("/Visita/:id", VisitaController.atualizarVisita);
router.delete("/visita/:id", VisitaController.deletarVisita);

export default router;