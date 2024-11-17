const Animal = require('../models/Animal');

class AnimalRepository {
  // Criar animal
  async criarAnimal(data) {
    return await Animal.create(data);
  }

  // Buscar todos os animais
  async buscarTodosAnimais() {
    return await Animal.findAll();
  }

  // Buscar animal por ID
  async buscarAnimalPorId(id) {
    return await Animal.findByPk(id);
  }

  // Atualizar animal
  async atualizarAnimal(id, data) {
    const animal = await Animal.findByPk(id);
    if (animal) {
      await Animal.update(data, {where:{ id}});
    } return await Animal.findByPk(id);
    return null;
  }

  // Excluir animal
  async excluirAnimal(id) {
    const animal = await Animal.findByPk(id);
    if (animal) {
      return await animal.destroy();
    }
    return null;
  }
}

module.exports = new AnimalRepository();
