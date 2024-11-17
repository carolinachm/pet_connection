const EventoService = require('../services/EventoService');

class EventoController {
    async criarEvento(req, res) {
        try {
            const evento = await EventoService.criarEvento(req.body);
            res.status(201).json(evento);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar Evento' });
        }
    }

    async buscarTodosEventos(req, res) {
        try {
            const eventos = await EventoService.buscarTodosEventos();
            res.status(200).json(eventos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar Eventos' });
        }
    }

    async buscarEventoPorId(req, res) {
        try {
            const evento = await EventoService.buscarEventoPorId(req.params.id);
            if (evento) res.status(200).json(evento);
            else res.status(404).json({ error: 'Evento não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar Evento' });
        }
    }

    async atualizarEvento(req, res) {
        try {
            const evento = await EventoService.atualizarEvento(req.params.id, req.body);
            if (evento) res.status(200).json(evento);
            else res.status(404).json({ error: 'Evento não encontrado' });
        } catch (error) {
            console.error("Erro ao atualizar Evento", error);
            res.status(500).json({ error: 'Erro ao atualizar Evento' });
        }
    }

    async excluirEvento(req, res) {
        try {
            const success = await EventoService.excluirEvento(req.params.id);
            if (success) res.status(204).json({ message: 'Eevento deletado' });
            else res.status(404).json({ error: 'Evento não encontrado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar Evento' });
        }
    }
}

module.exports = new EventoController();
