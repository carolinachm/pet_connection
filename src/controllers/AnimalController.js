const AnimalService = require('../services/AnimalService');

class AnimalController {
  // Criar Animal
  async criarAnimal(req, res) {
    try {
      const animal = await AnimalService.criarAnimal(req.body);
      res.status(201).json(animal);
    } catch (error) {
      console.error(error); // Log do erro para depuração
      res.status(500).json({ error: 'Erro ao criar animal' });
    }
  }

  // Buscar todos os animais
  async buscarTodosAnimais(req, res) {
    try {
      const animais = await AnimalService.buscarTodosAnimais();
      res.status(200).json(animais);
    } catch (error) {
      console.error(error); // Log do erro para depuração
      res.status(500).json({ error: 'Erro ao listar animais' });
    }
  }

  // Buscar animal por ID
  async buscaAnimaisPorId(req, res) {
    try {
      const animal = await AnimalService.buscarAnimalPorId(req.params.id);
      if (animal) {
        res.status(200).json(animal);
      } else {
        res.status(404).json({ error: 'Animal não encontrado' });
      }
    } catch (error) {
      console.error(error); // Log do erro para depuração
      res.status(500).json({ error: 'Erro ao buscar animal' });
    }
  }

  // Atualizar animal
  async atualizarAnimal(req, res) {
    try {
      const animal = await AnimalService.atualizarAnimal(req.params.id, req.body);
      if (animal) {
        res.status(200).json(animal);
      } else {
        res.status(404).json({ error: 'Animal não encontrado' });
      }
    } catch (error) {
      console.error(error); // Log do erro para depuração
      res.status(500).json({ error: 'Erro ao atualizar animal' });
    }
  }

  // Excluir animal
  async excluirAnimal(req, res) {
    try {
      const success = await AnimalService.excluirAnimal(req.params.id);
      if (success) {
        res.status(204).json({ message: 'Animal deletado' });
      } else {
        res.status(404).json({ error: 'Animal não encontrado' });
      }
    } catch (error) {
      console.error(error); // Log do erro para depuração
      res.status(500).json({ error: 'Erro ao deletar animal' });
    }
  }
}

module.exports = new AnimalController();
