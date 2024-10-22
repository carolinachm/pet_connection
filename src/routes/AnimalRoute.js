import express from "express";
import multer from "multer";
import AnimalController from "../controllers/AnimalController.js";

const router = express.Router();

// Função para gerar um nome único para o arquivo
const filename = (req, file, cb) => {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  cb(null, uniqueSuffix + "-" + file.originalname); // Gera um nome único para o arquivo
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define o diretório de destino
  },
  filename: filename, // Chama a função filename para gerar o nome
});

const upload = multer({ storage: storage });

// Define as rotas e os métodos HTTP associados.
router.get("/", AnimalController.listarTodosAnimal);
router.get("/:id", AnimalController.buscarAnimalPorId);
router.post("/", upload.single("foto"), AnimalController.cadastraAnimal);
router.put("/:id", AnimalController.atualizarAnimal);
router.delete("/:id", AnimalController.deletarAnimal);

export default router;
