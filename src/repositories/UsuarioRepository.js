// Importa o modelo de Usuario.
import Usuario from "../models/usuarioModel.js";

// Define e exporta a classe UsuarioRepository.
export default class UsuarioRepository {
  // Método para buscar todos os usuários.
  static async findAll() {
    return await Usuario.findAll();
  }

  // Método para buscar um usuário pelo ID.
  static async findByPk(id) {
    return await Usuario.findByPk(id);
  }

  // Método para criar um novo usuário.
  static async create(data) {
    return await Usuario.create(data);
  }

  // Método para atualizar um usuário pelo ID.
  static async update(data, id) {
    return await Usuario.update(data, { where: { id } });
  }

  // Método para deletar um usuário pelo ID.
  static async destroy(id) {
    return await Usuario.destroy({ where: { id } });
  }
}
