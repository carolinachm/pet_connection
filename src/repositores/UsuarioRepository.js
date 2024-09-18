// Importa o modelo de Usuario.
const UsuarioModel = require("../models/UsuarioModel");
// Define e exporta a classe UsuarioRepository.
class UsuarioRepository {
  // Método para buscar todos os usuários.
  static async findAll() {
    return await UsuarioModel.findAll();
  }

  // Método para buscar um usuário pelo ID.
  static async findByPk(id) {
    return await UsuarioModel.findByPk(id);
  }

  // Método para criar um novo usuário.
  static async create(data) {
    return await UsuarioModel.create(data);
  }

  // Método para atualizar um usuário pelo ID.
  static async update(data, id) {
    return await UsuarioModel.update(data, { where: { id } });
  }

  // Método para deletar um usuário pelo ID.
  static async destroy(id) {
    return await UsuarioModel.destroy({ where: { id } });
  }
}
module.exports = UsuarioRepository;