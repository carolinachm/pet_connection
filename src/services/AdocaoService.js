const AdocaoRepository = require('../repositories/AdocaoRepository');

class AdocaoService {

    async criarAdocao(data){
        return await AdocaoRepository.criarAdocao(data);
    }

    async buscarTodasAdocoes(){
        return await AdocaoRepository.buscarTodasAdoçoes();
    }

    async buscarAdocaoPorId(id){
        return await AdocaoRepository.buscarAdocaoPorId(id);
    }

    async atualizarAdocao(id, data){
        return await AdocaoRepository.atualizarAdocao(id, data);
    }

    async excluirAdocao(id){
        return await AdocaoRepository.excluirAdocao(id);
    }
}

module.exports = new AdocaoService();