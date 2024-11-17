const Evento = require('../models/Evento');

class EventoRepository {
    // Criar evento
    async criarEvento(data) {
        try {
            return await Evento.create(data);
        } catch (error) {
            console.error('Erro ao criar evento:', error);
            throw new Error('Erro ao criar evento');
        }
    }

    // Buscar todos os eventos
    async buscarTodosEventos() {
        try {
            return await Evento.findAll();
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            throw new Error('Erro ao buscar eventos');
        }
    }

    // Buscar evento por ID
    async buscarEventoPorId(id) {
        try {
            return await Evento.findByPk(id);
        } catch (error) {
            console.error(`Erro ao buscar evento com id ${id}:`, error);
            throw new Error('Erro ao buscar evento');
        }
    }

    // Atualizar evento
    async atualizarEvento(id, data) {
        try {
            const evento = await Evento.findByPk(id);
            if (evento) {
                await Evento.update(data, { where: { id } });
                return await Evento.findByPk(id); // Retorna o evento atualizado
            }
            return null; // Retorna null caso o evento não seja encontrado
        } catch (error) {
            console.error(`Erro ao atualizar evento com id ${id}:`, error);
            throw new Error('Erro ao atualizar evento');
        }
    }

    // Excluir evento
    async excluirEvento(id) {
        try {
            const evento = await Evento.findByPk(id);
            if (evento) {
                await evento.destroy(); // Usa a instância do evento para destruir
                return evento; // Retorna o evento excluído
            }
            return null; // Retorna null caso o evento não seja encontrado
        } catch (error) {
            console.error(`Erro ao excluir evento com id ${id}:`, error);
            throw new Error('Erro ao excluir evento');
        }
    }
}

module.exports = new EventoRepository();
