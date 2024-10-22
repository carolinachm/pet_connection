import AnimalService from "../services/AnimalService.js";

async function listarTodosAnimal(req, res) {
  try {
    const animais = await AnimalService.listarTodosAnimal();
    res.json(animais);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarAnimalPorId(req, res) {
  try {
    const animal = await AnimalService.buscarAnimalPorId(req.params.id);
    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json({ message: "Animal não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastraAnimal(req, res) {
  try {
    const {
      nome,
      especie,
      raca,
      idade,
      sexo,
      tamanho,
      cor,
      caracteristicas,
      status,
      data_entrada,
    } = req.body;

    if (!nome || !especie) {
      return res
        .status(400)
        .json({ message: "Nome e espécie são obrigatórios." });
    }

    const foto = req.file ? `/uploads/${req.file.filename}` : null; // Corrigido para não duplicar /uploads

    const animalData = {
      nome,
      especie,
      raca,
      idade,
      sexo,
      tamanho,
      cor,
      caracteristicas,
      status,
      data_entrada,
      foto, // Salva o caminho da foto corretamente
    };

    const animal = await AnimalService.cadastraAnimal(animalData);
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarAnimal(req, res) {
  try {
    const animal = await AnimalService.atualizarAnimal(req.params.id, req.body);
    if (animal) {
      res.json(await AnimalService.buscarAnimalPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Animal não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarAnimal(req, res) {
  try {
    const animal = await AnimalService.deletarAnimal(req.params.id);
    if (animal) {
      res.json({ message: "Animal deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Animal não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosAnimal,
  buscarAnimalPorId,
  cadastraAnimal,
  atualizarAnimal,
  deletarAnimal,
};
