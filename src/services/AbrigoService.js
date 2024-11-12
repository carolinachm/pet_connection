const AbrigoRepository = require('../repositories/AbrigoRepository');

class AbrigoService {
    async criarAbrigo(data) {
        return await AbrigoRepository.criarAbrigo(data);
    }

    async buscarTodosAbrigos() {
        return await AbrigoRepository.buscarTodosAbrigos();
    }

    async buscarAbrigoPorId(id) {
        return await AbrigoRepository.buscarAbrigoPorId(id);
    }

    async atualizarAbrigo(id, data) {
        return await AbrigoRepository.atualizarAbrigo(id, data);
    }

    async excluirAbrigo(id) {
        return await AbrigoRepository.excluirAbrigo(id);
    }
}

module.exports = new AbrigoService();
