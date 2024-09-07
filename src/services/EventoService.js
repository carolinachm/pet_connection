import EventoService from "../repositories/EventoRepository.js";

export default class EventoService {
    static async listarTodosEventos() {
        return await EventoService.findAll();
      }
      static async buscarEventoPorId(id) {
        return await EventoService.findByPk(id);
      }
      static async cadastrarEvento(data) {
        return await EventoService.create(data);
      }
      static async atualizarEvento(id, data) {
        return await EventoService.update(id, data);
      }
      static async deletarEvento(id) {
        return await EventoService.destroy(id);
      }
}
