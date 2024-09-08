// Importa o modelo de visita.
import Visita from "../models/VisitaModel.js";

// Define e exporta a classe VisitaRepository.
export default class VisitaRepository {
  // Método para buscar todas as visitas.
  static async findAll() {
    return await Visita.findAll();
  }

  // Método para buscar uma visita pelo ID.
  static async findByPk(id) {
    return await Visita.findByPk(id);
  }

  // Método para criar uma nova visita.
  static async create(data) {
    return await Visita.create(data);
  }

  // Método para atualizar uma visita pelo ID.
  static async update(data, id) {
    return await Visita.update(data, { where: { id } });
  }

  // Método para deletar uma visita pelo ID.
  static async destroy(id) {
    return await Visita.destroy({ where: { id } });
  }
}
