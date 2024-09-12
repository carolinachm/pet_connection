import express from "express";
import VoluntarioController from "../controllers/VoluntarioController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/voluntario", VoluntarioController.listarTodosVoluntarios);
router.get("/voluntario/:id", VoluntarioController.buscarVoluntarioPorId);
router.post("/voluntario", VoluntarioController.cadastrarVoluntario);
router.put("/voluntario/:id", VoluntarioController.atualizarVoluntario);
router.delete("/voluntario/:id", VoluntarioController.deletarVoluntario);

export default router;