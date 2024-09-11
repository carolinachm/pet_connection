// Importa o repositório de mensagens.
import MensagemRepository from "../repositories/MensagemRepository";

// Define e exporta a classe MensagemService.
export default class MensagemService {
  // Método para listar todas as mensagens.
  static async listarTodos() {
    return await MensagemRepository.findAll();
  }

  // Método para buscar uma mensagem pelo ID.
  static async buscarMensagemPorId(id) {
    return await MensagemRepository.findByPk(id);
  }

  // Método para cadastrar uma nova mensagem.
  static async cadastraMensagem(data) {
    return await MensagemRepository.create(data);
  }

  // Método para atualizar uma mensagem pelo ID.
  static async atualizarMensagem(id, data) {
    return await MensagemRepository.update(data, id);
  }

  // Método para deletar uma mensagem pelo ID.
  static async deletarMensagem(id) {
    return await MensagemRepository.destroy(id);
  }
}
