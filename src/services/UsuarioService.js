const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async criarUsuario(data) {
        return await usuarioRepository.criarUsuario(data);
    }

    async buscarTodosUsuarios() {
        return await usuarioRepository.buscarTodosUsuarios();
    }

    async buscarUsuarioPorId(id) {
        return await usuarioRepository.buscarUsuarioPorId(id);
    }

    async atualizarUsuario(id, data) {
        return await usuarioRepository.atualizarUsuario(id, data);
    }

    async excluirUsuario(id) {
        return await usuarioRepository.excluirUsuario(id);
    }
}

module.exports = new UsuarioService();
