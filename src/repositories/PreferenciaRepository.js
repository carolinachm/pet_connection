// Importa o modelo de Preferência.
import Preferencia from "../models/PreferenciaModel.js";

// Define e exporta a classe PrefenciaRepository.
export default class PreferenciaRepository {
  // Método para buscar todas as preferências.
  static async findAll() {
    return await Preferencia.findAll();
  }

  // Método para buscar uma preferência pelo ID.
  static async findByPk(id) {
    return await Preferencia.findByPk(id);
  }

  // Método para criar uma nova preferência.
  static async create(data) {
    return await Preferencia.create(data);
  }

  // Método para atualizar uma preferência pelo ID.
  static async update(data, id) {
    return await Preferencia.update(data, { where: { id } });
  }

  // Método para deletar uma preferência pelo ID.
  static async destroy(id) {
    return await Preferencia.destroy({ where: { id } });
  }
}
