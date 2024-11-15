const AnimalRepository = require('../repositories/AnimalRepository');
const AbrigoRepository = require('../repositories/AbrigoRepository'); // Certifique-se de ter esse repositório

class AnimalService {
  // Criar animal
  async criarAnimal(data) {
    // Verificar se o id_abrigo existe
    const abrigo = await AbrigoRepository.buscarAbrigoPorId(data.id_abrigo);
    if (!abrigo) {
      throw new Error('Abrigo não encontrado');
    }
    
    return await AnimalRepository.criarAnimal(data);
  }

  // Buscar todos os animais
  async buscarTodosAnimais() {
    return await AnimalRepository.buscarTodosAnimais();
  }

  // Buscar animal por ID
  async buscarAnimalPorId(id) {
    return await AnimalRepository.buscarAnimalPorId(id);
  }

  // Atualizar animal
  async atualizarAnimal(id, data) {
    return await AnimalRepository.atualizarAnimal(id, data);
  }

  // Excluir animal
  async excluirAnimal(id) {
    return await AnimalRepository.excluirAnimal(id);
  }
}

module.exports = new AnimalService();
