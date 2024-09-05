import ApadrinhamentoRepository from "../repositories/ApadrinhamentoRepository"

// Define e exporta a classe ApadrinhamentoService.
export default class ApadrinhamentoService {
    // Método para listar todos os apadrinhamentos.
    static async listarTodosApadrinhamento() {
      return await ApadrinhamentoRepository.findAll();
    }
  
    // Método para buscar um apadrinhamento pelo ID.
    static async buscarApadrinhamentoPorId(id) {
      return await ApadrinhamentoRepository.findByPk(id);
    }
  
    // Método para cadastrar um novo apadrinhamento.
    static async cadastraApadrinhamento(data) {
      return await ApadrinhamentoRepository.create(data);
    }
  
    // Método para atualizar um apadrinhamento pelo ID.
    static async atualizarApadrinhamento(id, data) {
      return await ApadrinhamentoRepository.update(data, id);
    }
  
    // Método para deletar um apadrinhamento pelo ID.
    static async deletarApadrinhamento(id) {
      return await ApadrinhamentoRepository.destroy(id);
    }
  }