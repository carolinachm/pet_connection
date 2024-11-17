const DoacaoRepository = require('../repositories/DoacaoRepository');

class DoacaoService {
    async criarDoacao(data) {
        return await DoacaoRepository.criarDoacao(data);
    }

    async buscarTodosDoacoes() {
        return await DoacaoRepository.buscarTodosDoacoes();
    }

    async buscarDoacaoPorId(id) {
        return await DoacaoRepository.buscarDoacaoPorId(id);
    }

    async atualizarDoacao(id, data) {
        return await DoacaoRepository.atualizarDoacao(id, data);
    }

    async excluirDoacao(id) {
        return await DoacaoRepository.excluirDoacao(id);
    }
}

module.exports = new DoacaoService();
