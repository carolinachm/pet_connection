const EventoRepository = require('../repositories/EventoRepository');

class EventoService {
    async criarEvento(data) {
        return await EventoRepository.criarEvento(data);
    }

    async buscarTodosEventos() {
        return await EventoRepository.buscarTodosEventos();
    }

    async buscarEventoPorId(id) {
        return await EventoRepository.buscarEventoPorId(id);
    }

    async atualizarEvento(id, data) {
        return await EventoRepository.atualizarEvento(id, data);
    }

    async excluirEvento(id) {
        return await EventoRepository.excluirEvento(id);
    }
}

module.exports = new EventoService();
