import AvaliacaoRepository from "../repositories/AvaliacaoRepository"

// Define e exporta a classe AvalicaoService.
export default class AvaliacaoService {
    // Método para listar todas as avaliaçôes.
    static async listarTodasAvaliacoes() {
      return await AvaliacaoRepository.findAll();
    }
  
    // Método para buscar uma avalição pelo ID.
    static async buscarAvaliacaoPorId(id) {
      return await AvaliacaoRepository.findByPk(id);
    }
  
    // Método para cadastrar uma nova avaliação.
    static async cadastraAvaliacao(data) {
      return await AvaliacaoRepository.create(data);
    }
  
    // Método para atualizar uma avaliacao pelo ID.
    static async atualizarAvaliacao(id, data) {
      return await AvaliacaoRepository.update(data, id);
    }
  
    // Método para deletar uma avaliação pelo ID.
    static async deletarAvaliacao(id) {
      return await AvaliacaoRepository.destroy(id);
    }
  }