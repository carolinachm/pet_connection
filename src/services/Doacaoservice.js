import DoacaoService from "../repositories/DoacaoRepository.js";

export default class DoacaoService {
    static async listarTodasDoacoes() {
        return await DoacaoService.findAll();
      }
      static async buscarDoacaoPorId(id) {
        return await DoacaoService.findByPk(id);
      }
      static async cadastrarDoacao(data) {
        return await DoacaoService.create(data);
      }
      static async atualizarDoacao(id, data) {
        return await DoacaoService.update(id, data);
      }
      static async deletarDoacao(id) {
        return await DoacaoService.destroy(id);
      }
}
