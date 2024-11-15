// src/controllers/UsuarioController.js
const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    async criarUsuario(req, res) {
        try {
            // Se houver uma foto, adicione o caminho à requisição
            const foto = req.file ? req.file.path : null;

            // Criar o usuário, incluindo os dados do arquivo (se houver)
            const usuarioData = {
                ...req.body,
                foto: foto // Armazene o caminho da foto
            };
            const usuario = await UsuarioService.criarUsuario(usuarioData);
            res.status(201).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }

    async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.buscarTodosUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    }

    async buscarUsuariosPorId(req, res) {
        try {
            const usuario = await UsuarioService.buscarUsuarioPorId(req.params.id);
            if (usuario) res.json(usuario);
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const usuario = await UsuarioService.atualizarUsuario(req.params.id, req.body);
            if (usuario) res.json(usuario);
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async excluirUsuario(req, res) {
        try {
            const success = await UsuarioService.excluirUsuario(req.params.id);
            if (success) res.json({ message: 'Usuário deletado' });
            else res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
}

module.exports = new UsuarioController();
