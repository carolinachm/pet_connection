// src/services/UsuarioService.js

const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
  // Criar usuário
  async criarUsuario(data) {
    try {
      return await UsuarioRepository.criarUsuario(data); // Chama o repositório para criar o usuário
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  // Buscar todos os usuários
  async buscarTodosUsuarios() {
    try {
      return await UsuarioRepository.buscarTodosUsuarios();
    } catch (error) {
      throw new Error("Erro ao listar usuários");
      
    }
    
  }

  // Buscar usuário por ID
  async buscarUsuarioPorId(id) {
    try {
      return await UsuarioRepository.buscarUsuarioPorId(id);

    } catch (error) {
      throw new Error("Erro ao buscar um usuário");
      
    }
  }

  // Atualizar usuário
  async atualizarUsuario(id, data) {
    try {
      return await UsuarioRepository.atualizarUsuario(id, data);

    } catch (error) {
      throw new Error("Erro ao atualizar usuário");
      
    }
  }

  // Excluir usuário
  async excluirUsuario(id) {
    try {
      return await UsuarioRepository.excluirUsuario(id);

    } catch (error) {
      throw new Error("Erro ao excluir usuário");
      
    }
  }
}

module.exports = new UsuarioService();
