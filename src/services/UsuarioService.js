// src/services/UsuarioService.js

const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
  // Criar usuário
  async criarUsuario(data) {
    try {
      return await UsuarioRepository.criarUsuario(data);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }

  // Buscar todos os usuários
  async buscarTodosUsuarios() {
    try {
      return await UsuarioRepository.buscarTodosUsuarios();
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      throw new Error('Erro ao listar usuários');
    }
  }

  // Buscar usuário por ID
  async buscarUsuarioPorId(id) {
    try {
      const usuario = await UsuarioRepository.buscarUsuarioPorId(id);
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      return usuario;
    } catch (error) {
      console.error(`Erro ao buscar usuário com ID ${id}:`, error);
      throw new Error('Erro ao buscar um usuário');
    }
  }

  // Atualizar usuário
  async atualizarUsuario(id, data) {
    try {
      const usuarioAtualizado = await UsuarioRepository.atualizarUsuario(id, data);
      if (!usuarioAtualizado) {
        throw new Error('Usuário não encontrado para atualização');
      }
      return usuarioAtualizado;
    } catch (error) {
      console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
      throw new Error('Erro ao atualizar usuário');
    }
  }

  // Excluir usuário
  async excluirUsuario(id) {
    try {
      const usuarioExcluido = await UsuarioRepository.excluirUsuario(id);
      if (!usuarioExcluido) {
        throw new Error('Usuário não encontrado para exclusão');
      }
      return usuarioExcluido;
    } catch (error) {
      console.error(`Erro ao excluir usuário com ID ${id}:`, error);
      throw new Error('Erro ao excluir usuário');
    }
  }
}

module.exports = new UsuarioService();
