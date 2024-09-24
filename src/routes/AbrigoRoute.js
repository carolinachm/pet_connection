import express from "express";
import AbrigoController from "../controllers/AbrigoController.js";

const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/", AbrigoController.listarTodosAbrigos);
router.get("/:id", AbrigoController.buscarAbrigoPorId);
router.post("/", AbrigoController.cadastrarAbrigo);
router.put("/:id", AbrigoController.atualizarAbrigo);
router.delete("/:id", AbrigoController.deletarAbrigo);

export default router;