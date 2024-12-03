const AbrigoService = require('../services/AbrigoService');

class AbrigoController {
    async criarAbrigo(req, res) {
        try {
            const abrigo = await AbrigoService.criarAbrigo(req.body);
            res.status(201).json(abrigo);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar um abrigo' });
        }
    }

    async buscarTodosAbrigos(req, res) {
        try {
            const abrigos = await AbrigoService.buscarTodosAbrigos();
            res.status(200).json(abrigos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar abrigos' });
        }
    }

    async buscarAbrigoPorId(req, res) {
        try {
            const abrigo = await AbrigoService.buscarAbrigoPorId(req.params.id);
            if (abrigo) res.status(200).json(abrigo);
            else res.status(404).json({ error: 'Abrigo não foi encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar abrigo' });
        }
    }

    async atualizarAbrigo(req, res) {
        try {
            const abrigo = await AbrigoService.atualizarAbrigo(req.params.id, req.body);
            if (abrigo) res.status(200).json(abrigo);
            else res.status(404).json({ error: 'Abrigo não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar abrigo' });
        }
    }

    async excluirAbrigo(req, res) {
        try {
            const success = await AbrigoService.excluirAbrigo(req.params.id);
            if (success) res.status(204).json({ message: 'Abrigo deletado' });
            else res.status(404).json({ error: 'Abrigo não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar abrigo' });
        }
    }
}

module.exports = new AbrigoController();
