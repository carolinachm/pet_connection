// Importa o repositório de relatórios.
import RelatorioRepository from "../repositories/RelatorioRepository";

// Define e exporta a classe RelatorioService.
export default class RelatorioService {
  // Método para listar todos os relatórios.
  static async listarTodos() {
    return await RelatorioRepository.findAll();
  }

  // Método para buscar um relatório pelo ID.
  static async buscarRelatorioPorId(id) {
    return await RelatorioRepository.findByPk(id);
  }

  // Método para cadastrar um novo relatório.
  static async cadastrarRelatório(data) {
    return await RelatorioRepository.create(data);
  }

  // Método para atualizar um relatório pelo ID.
  static async atualizarRelatorio(id, data) {
    return await RelatorioRepository.update(data, id);
  }

  // Método para deletar um relatório pelo ID.
  static async deletarRelatorio(id) {
    return await RelatorioRepository.destroy(id);
  }
}