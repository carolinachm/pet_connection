// Importa o repositório de usuários.
const UsuarioRepository = require("../repositores/UsuarioRepository");

// Define e exporta a classe UsuarioService.
class UsuarioService {
  // Método para listar todos os usuários.
  static async listarTodos() {
    return await UsuarioRepository.findAll();
  }

  // Método para buscar um usuário pelo ID.
  static async buscarUsuarioPorId(id) {
    return await UsuarioRepository.findByPk(id);
  }

  // Método para cadastrar um novo usuário.
  static async cadastraUsuario(data) {
    return await UsuarioRepository.create(data);
  }

  // Método para atualizar um usuário pelo ID.
  static async atualizarUsuario(id, data) {
    return await UsuarioRepository.update(data, id);
  }

  // Método para deletar um usuário pelo ID.
  static async deletarUsuario(id) {
    return await UsuarioRepository.destroy(id);
  }
}
module.exports = UsuarioService;