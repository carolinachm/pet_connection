const usuarioService = require('../services/UsuarioService');

class UsuarioController {
    async criarUsuario(req, res) {
        try {
            const usuario = await usuarioService.criarUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }

    async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await usuarioService.buscarTodosUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    }

    async buscarUsuariosPorId(req, res) {
        try {
            const usuarios = await usuarioService.buscarUsuarioPorId(req.params.id);
            if (usuario) res.json(usuario);
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const usuario = await usuarioService.atualizarUsuario(req.params.id, req.body);
            if (usuario) res.json(usuario);
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async excluirUsuario(req, res) {
        try {
            const success = await usuarioService.excluirUsuario(req.params.id);
            if (success) res.json({ message: 'Usuário deletado' });
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
}

module.exports = new UsuarioController();
