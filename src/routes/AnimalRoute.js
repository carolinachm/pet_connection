import express from "express";
import multer from "multer";
import AnimalController from "../controllers/AnimalController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

// Define as rotas e os métodos HTTP associados.
router.get("/", AnimalController.listarTodosAnimal);
router.get("/:id", AnimalController.buscarAnimalPorId);
router.post("/", upload.single("foto") ,AnimalController.cadastraAnimal);
router.put("/:id", AnimalController.atualizarAnimal);
router.delete("/:id",AnimalController.deletarAnimal);

export default router;
