const AvaliacaoRespostory = require('../repositories/AvaliacaoRepository');

class AvaliacaoService{
    async criarAvaliacao(data){
        return await AvaliacaoRespostory.criarAvaliacao(data)
    }

    async buscarTodasAvaliacoes(){
        return await AvaliacaoRespostory.buscarTodosAvaliacoes();
    }

    async buscarAvaliacaoPorId(id){
        return await AvaliacaoRespostory.buscarAvaliacaoPorId(id);  
    }

    async atualizarAvaliacao(id, data){
        return await AvaliacaoRespostory.atualizarAvaliacao(id, data);
    }

    async excluirAvaliacao(id){
        return await AvaliacaoRespostory.excluirAvaliacao(id);
    }
}

module.exports = new AvaliacaoService();