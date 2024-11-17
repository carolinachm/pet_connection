// src/controllers/UsuarioController.js
const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    async criarUsuario(req, res) {
        try {
            // Verifica se há um arquivo enviado e adiciona o caminho à requisição
            const foto = req.file ? req.file.path : null;

            // Cria o objeto de dados do usuário incluindo o caminho da foto (se houver)
            const usuarioData = {
                ...req.body,
                foto, // Adiciona a foto ao objeto de dados
            };

            const usuario = await UsuarioService.criarUsuario(usuarioData);
            return res.status(201).json(usuario);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }

    async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.buscarTodosUsuarios();
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            return res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    }

    async buscarUsuarioPorId(req, res) {
        try {
            const usuario = await UsuarioService.buscarUsuarioPorId(req.params.id);
            if (usuario) {
                return res.status(200).json(usuario);
            }
            return res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const usuario = await UsuarioService.atualizarUsuario(req.params.id, req.body);
            if (usuario) {
                return res.status(200).json(usuario);
            }
            return res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async excluirUsuario(req, res) {
        try {
            const usuario = await UsuarioService.excluirUsuario(req.params.id);
            if (usuario) {
                return res.status(200).json({ message: 'Usuário deletado com sucesso', usuario });
            }
            return res.status(404).json({ error: 'Usuário não encontrado' });
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
}

module.exports = new UsuarioController();
