import express from "express";
import DocumentoController from "../controllers/DocumentoController";

const router = express.Router()

// Define as rotas e os métodos HTTP associados.
router.get("/documento", DocumentoController.listarTodosDocumentos);
router.get("/documento/:id", DocumentoController.buscarDocumentoPorId);
router.post("/documento", DocumentoController.cadastrarDocumento);
router.put("/documento/:id", DocumentoController.atualizarDocumento);
router.delete("/documento/:id", DocumentoController.deletarDocumento);

export default router;