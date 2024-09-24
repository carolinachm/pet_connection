import express from "express";
import AnimalController from "../controllers/AnimalController.js";

const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/", AnimalController.listarTodosAnimal);
router.get("/:id", AnimalController.buscarAnimalPorId);
router.post("/", AnimalController.cadastraAnimal);
router.put("/:id", AnimalController.atualizarAnimal);
router.delete("/:id",AnimalController.deletarAnimal);

export default router;
