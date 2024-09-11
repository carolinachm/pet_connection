// Importa o repositório de voluntarios.
import VoluntarioRepository from "../repositories/VoluntarioRepository";

// Define e exporta a classe VoluntarioService.
export default class VoluntarioService {
  // Método para listar todos os voluntarios.
  static async listarTodos() {
    return await VoluntarioRepository.findAll();
  }

  // Método para buscar um voluntario pelo ID.
  static async buscarVoluntarioPorId(id) {
    return await VoluntarioRepository.findByPk(id);
  }

  // Método para cadastrar um novo voluntario.
  static async cadastraVoluntario(data) {
    return await VoluntarioRepository.create(data);
  }

  // Método para atualizar um voluntario pelo ID.
  static async atualizarVoluntario(id, data) {
    return await VoluntarioRepository.update(data, id);
  }

  // Método para deletar um voluntario pelo ID.
  static async deletarVoluntario(id) {
    return await VoluntarioRepository.destroy(id);
  }
}
