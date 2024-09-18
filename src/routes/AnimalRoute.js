const express = require("express");
const AnimalController = require( "../controllers/AnimalController");

const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/animal", AnimalController.listarTodosAnimal);
router.get("/animal/:id", AnimalController.buscarAnimalPorId);
router.post("/animal", AnimalController.cadastraAnimal);
router.put("/animal/:id", AnimalController.atualizarAnimal);
router.delete("/animal/:id",AnimalController.deletarAnimal);

module.exports = router;
