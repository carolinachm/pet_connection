import express from "express";
import EventoController from "../controllers/EventoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/evento", EventoController.listarTodosEventos);
router.get("/evento/:id", EventoController.buscarEventoPorId);
router.post("/evento", EventoController.cadastrarEvento);
router.put("/evento/:id", EventoController.atualizarEvento);
router.delete("/evento/:id", EventoController.deletarEvento);

export default router;