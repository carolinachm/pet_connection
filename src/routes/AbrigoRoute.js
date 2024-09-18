const express = require("express");
const AbrigoController  = require("../controllers/AbrigoController");

const router = express.Router();

// Define as rotas e os métodos HTTP associados.
router.get("/abrigo", AbrigoController.listarTodosAbrigos);
router.get("/abrigo/:id", AbrigoController.buscarAbrigoPorId);
router.post("/abrigo", AbrigoController.cadastrarAbrigo);
router.put("/abrigo/:id", AbrigoController.atualizarAbrigo);
router.delete("/abrigo/:id", AbrigoController.deletarAbrigo);

module.exports = router;