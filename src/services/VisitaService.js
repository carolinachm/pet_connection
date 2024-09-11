// Importa o repositório de visitas.
import VisitaRepository from "../repositories/VisitaRepository";

// Define e exporta a classe VisitaService.
export default class VisitaService {
  // Método para listar todas as visitas.
  static async listarTodos() {
    return await VisitaRepository.findAll();
  }

  // Método para buscar uma visita pelo ID.
  static async buscarVisitaPorId(id) {
    return await VisitaRepository.findByPk(id);
  }

  // Método para cadastrar uma nova visita.
  static async cadastraVisita(data) {
    return await VisitaRepository.create(data);
  }

  // Método para atualizar uma visita pelo ID.
  static async atualizarVisita(id, data) {
    return await VisitaRepository.update(data, id);
  }

  // Método para deletar uma visita pelo ID.
  static async deletarVisita(id) {
    return await VisitaRepository.destroy(id);
  }
}
