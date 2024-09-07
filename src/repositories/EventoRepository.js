// Importa o modelo de Evento.
import Evento from "../models/EventoModel.js";

// Define e exporta a classe EventoRepository.
export default class EventoRepository {
  // Método para buscar todos os eventos.
  static async findAll() {
    return await Evento.findAll();
  }

  // Método para buscar um evento pelo ID.
  static async findByPk(id) {
    return await Evento.findByPk(id);
  }

  // Método para criar um novo evento.
  static async create(data) {
    return await Evento.create(data);
  }

  // Método para atualizar um evento pelo ID.
  static async update(data, id) {
    return await Evento.update(data, { where: { id } });
  }

  // Método para deletar um evento pelo ID.
  static async destroy(id) {
    return await Evento.destroy({ where: { id } });
  }
}
