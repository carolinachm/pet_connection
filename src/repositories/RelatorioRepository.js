// Importa o modelo de Relatório.
import Relatorio from "../models/RelatorioModel.js";

// Define e exporta a classe RelatorioRepository.
export default class RelatorioRepository {
  // Método para buscar todos os retatórios.
  static async findAll() {
    return await Relatorio.findAll();
  }

  // Método para buscar um relatório pelo ID.
  static async findByPk(id) {
    return await Relatorio.findByPk(id);
  }

  // Método para criar um novo relatório.
  static async create(data) {
    return await Relatorio.create(data);
  }

  // Método para atualizar um relatório pelo ID.
  static async update(data, id) {
    return await Relatorio.update(data, { where: { id } });
  }

  // Método para deletar um relatório pelo ID.
  static async destroy(id) {
    return await Relatorio.destroy({ where: { id } });
  }
}
