const ApadrinhamentoRepository = require('../repositories/ApadrinhamentoRepository');

class ApadrinhamentoService {
    async criarApadrinhamento(data) {
        return await ApadrinhamentoRepository.criarApadrinhamento(data);
    }

    async buscarTodosApadrinhamentos() {
        return await ApadrinhamentoRepository.buscarTodosApadrinhamentos();
    }

    async buscarApadrinhamentoPorId(id) {
        return await ApadrinhamentoRepository.buscarApadrinhamentoPorId(id);
    }

    async atualizarApadrinhamento(id, data) {
        return await ApadrinhamentoRepository.atualizarApadrinhamento(id, data);
    }

    async excluirApadrinhamento(id) {
        return await ApadrinhamentoRepository.excluirApadrinhamento(id);
    }
}

module.exports = new ApadrinhamentoService();
