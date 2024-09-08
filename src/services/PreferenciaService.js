// Importa o repositório de preferências.
import PreferenciaRepository from "../repositories/PreferenciaRepository";

// Define e exporta a classe PreferenciaService.
export default class PreferenciaService {
  // Método para listar todas as preferências.
  static async listarTodos() {
    return await PreferenciaRepository.findAll();
  }

  // Método para buscar uma prefêrencia pelo ID.
  static async buscarPreferenciaPorId(id) {
    return await PreferenciaRepository.findByPk(id);
  }

  // Método para cadastrar uma nova preferência.
  static async cadastraPreferencia(data) {
    return await PreferenciaRepository.create(data);
  }

  // Método para atualizar uma preferência pelo ID.
  static async atualizarPreferencia(id, data) {
    return await PreferenciaRepository.update(data, id);
  }

  // Método para deletar uma preferência pelo ID.
  static async deletarPreferencia(id) {
    return await PreferenciaRepository.destroy(id);
  }
}
