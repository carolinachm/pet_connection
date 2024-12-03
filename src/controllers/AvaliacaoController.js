const AvaliacaoService = require('../services/AvaliacaoService');

class AvaliacaoController{

    async criarAvaliacao(req, res){
        try {
            const avaliacao = await AvaliacaoService.criarAvaliacao(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar uma avaliacao'})
        }
    }

    async buscarTodosAvaliacoes(req, res){
        try {
            const avaliacoes = await AvaliacaoService.buscarTodasAvaliacoes();
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({error : 'Erro ao listar avaliações'});
        }
    }

    async buscarAvaliacaoPorId(req, res){
        try {
            const avaliacao = await AvaliacaoService.buscarAvaliacaoPorId(req.params.id);
            if(avaliacao) res.status(200).json(avaliacao);
            else res.status(404).json({error : 'Avaliação não foi encontrada '});
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar uma avaliação'});
            
        }
    }

    async atualizarAvaliacao(req, res){
        try {
            const avaliacao  = await AvaliacaoService.atualizarAvaliacao(req.params.id, req.body);
            if(avaliacao) res.status(200).json(avaliacao);
            else res.status(404).json({error : 'Avaliação não foi encontrada '});
        } catch (error) {
            res.status(500).json({error: 'Erro ao atualizar a avaliação'});
        }
    }

    async excluirAvaliacao(req, res){
        try {
            const success = await AvaliacaoService.excluirAvaliacao(req.params.id);
            if(success) res.status(204).json({message: 'Avaliação deletada'});
            else res.status(404).json({error : 'Avaliação não foi encontrada'})
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar avaliação'});
        }
    }
}

module.exports = new AvaliacaoController();