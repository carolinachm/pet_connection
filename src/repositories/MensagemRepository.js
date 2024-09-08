// Importa o modelo de Mensagem.
import Mensagem from "../models/MensagemModel.js";

// Define e exporta a classe MensagemRepository.
export default class MensagemRepository {
  // Método para buscar todas os mensagens.
  static async findAll() {
    return await Mensagem.findAll();
  }

  // Método para buscar uma mensagem pelo ID.
  static async findByPk(id) {
    return await Mensagem.findByPk(id);
  }

  // Método para criar uma nova mensagem.
  static async create(data) {
    return await Mensagem.create(data);
  }

  // Método para atualizar uma mensagem pelo ID.
  static async update(data, id) {
    return await Mensagem.update(data, { where: { id } });
  }

  // Método para deletar uma mensagem pelo ID.
  static async destroy(id) {
    return await Mensagem.destroy({ where: { id } });
  }
}