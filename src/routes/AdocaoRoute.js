const express = require("express");
const AdocaoController = require("../controllers/AdocaoController");

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/adocao", AdocaoController.listarTodasAdocoes);
router.get("/adocao/:id", AdocaoController.buscarAdocaoPorId);
router.post("/adocao", AdocaoController.cadastrarAdocao);
router.put("/adocao/:id", AdocaoController.atualizarAdocao);
router.delete("/adocao/:id", AdocaoController.deletarAdocao);

module.exports =  router;