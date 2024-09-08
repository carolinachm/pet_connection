// Importa o modelo de voluntario.
import Voluntario from "../models/VoluntarioModel.js";

// Define e exporta a classe VoluntarioRepository.
export default class VoluntarioRepository {
  // Método para buscar todos os voluntarios.
  static async findAll() {
    return await Voluntario.findAll();
  }

  // Método para buscar um voluntario pelo ID.
  static async findByPk(id) {
    return await Voluntario.findByPk(id);
  }

  // Método para criar uma novo voluntario.
  static async create(data) {
    return await Voluntario.create(data);
  }

  // Método para atualizar um voluntario pelo ID.
  static async update(data, id) {
    return await Voluntario.update(data, { where: { id } });
  }

  // Método para deletar um voluntario pelo ID.
  static async destroy(id) {
    return await Voluntario.destroy({ where: { id } });
  }
}