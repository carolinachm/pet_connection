const DoacaoService = require('../services/DoacaoService');

class DoacaoController {
    async criarDoacao(req, res) {
        try {
            const doacao = await DoacaoService.criarDoacao(req.body);
            res.status(201).json(doacao);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar Doação' });
        }
    }

    async buscarTodosDoacoes(req, res) {
        try {
            const doacoes = await DoacaoService.buscarTodosDoacoes();
            res.status(200).json(doacoes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar Doações' });
        }
    }

    async buscarDoacoesPorId(req, res) {
        try {
            const doacao = await DoacaoService.buscarDoacaoPorId(req.params.id);
            if (doacao) res.status(200).json(doacao);
            else res.status(404).json({ error: 'Doação não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Doação' });
        }
    }

    async atualizarDoacao(req, res) {
        try {
            const doacao = await DoacaoService.atualizarDoacao(req.params.id, req.body);
            if (doacao) res.status(200).json(doacao);
            else res.status(404).json({ error: 'Doação não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar Doação' });
        }
    }

    async excluirDoacao(req, res) {
        try {
            const success = await DoacaoService.excluirDoacao(req.params.id);
            if (success) res.status(204).json({ message: 'Doação deletado' });
            else res.status(404).json({ error: 'Doação não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar Doação' });
        }
    }
}

module.exports = new DoacaoController();
