// src/repositories/UsuarioRepository.js
const Usuario = require('../models/Usuario');

class UsuarioRepository {
    async criarUsuario(data) {
        return await Usuario.create(data);  // Inclui o caminho da foto no objeto `data`
    }

    async buscarTodosUsuarios() {
        return await Usuario.findAll();
    }

    async buscarUsuarioPorId(id) {
        return await Usuario.findByPk(id);
    }

    async atualizarUsuario(id, data) {
        const usuario = await Usuario.findByPk(id);
        if (usuario) return await usuario.update(data);
        return null;
    }

    async excluirUsuario(id) {
        const usuario = await Usuario.findByPk(id);
        if (usuario) return await usuario.destroy();
        return null;
    }
}

module.exports = new UsuarioRepository();
