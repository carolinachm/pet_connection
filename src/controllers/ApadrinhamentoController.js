const ApadrinhamentoService = require('../services/ApadrinhamentoService');

class ApadrinhamentoController {
    
    async criarApadrinhamento(req, res) {
        try {
            const apadrinhamento = await ApadrinhamentoService.criarApadrinhamento(req.body);
            res.status(201).json(apadrinhamento);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar apadrinhamento' });
        }
    }

    async buscarTodosApadrinhamentos(req, res) {
        try {
            const apadrinhamentos = await ApadrinhamentoService.buscarTodosApadrinhamentos();
            res.status(200).json(apadrinhamentos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar apadrinhamentos' });
        }
    }

    async buscarApadrinhamentoPorId(req, res) {
        try {
            const apadrinhamento = await ApadrinhamentoService.buscarApadrinhamentoPorId(req.params.id);
            if (apadrinhamento) res.status(200).json(apadrinhamento);
            else res.status(404).json({ error: 'apadrinhamento não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar apadrinhamento' });
        }
    }

    async atualizarApadrinhamento(req, res) {
        try {
            const apadrinhamento = await ApadrinhamentoService.atualizarApadrinhamento(req.params.id, req.body);
            if (apadrinhamento) res.status(200).json(apadrinhamento);
            else res.status(404).json({ error: 'apadrinhamento não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar apadrinhamento' });
        }
    }

    async excluirApadrinhamento(req, res) {
        try {
            const success = await ApadrinhamentoService.excluirApadrinhamento(req.params.id);
            if (success) res.status(204).json({ message: 'apadrinhamento deletado' });
            else res.status(404).json({ error: 'apadrinhamento não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar apadrinhamento' });
        }
    }
}

module.exports = new ApadrinhamentoController();
