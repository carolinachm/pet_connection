import AnimalRepository from "../repositores/AnimalRepository"

// Define e exporta a classe AnimalService.
export default class AnimalService {
    // Método para listar todos os animais.
    static async listarTodosAnimal() {
      return await AnimalRepository.findAll();
    }
  
    // Método para buscar um animal pelo ID.
    static async buscarAnimalPorId(id) {
      return await AnimalRepository.findByPk(id);
    }
  
    // Método para cadastrar um novo animal.
    static async cadastraAnimal(data) {
      return await AnimalRepository.create(data);
    }
  
    // Método para atualizar um animal pelo ID.
    static async atualizarAnimal(id, data) {
      return await UsuarioRepository.update(data, id);
    }
  
    // Método para deletar um animal pelo ID.
    static async deletarAnimal(id) {
      return await AnimalRepository.destroy(id);
    }
  }