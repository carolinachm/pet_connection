import AdocaoService from "../repositores/AdocaoRepository";

export default class AdocaoService {
    static async listarTodasAdocoes() {
        return await AdocaoService.findAll();
      }
      static async buscarAdocaoPorId(id) {
        return await AdocaoService.findByPk(id);
      }
      static async cadastrarAdocao(data) {
        return await AdocaoService.create(data);
      }
      static async atualizarAdocao(id, data) {
        return await AdocaoService.update(id, data);
      }
      static async deletarAdocao(id) {
        return await AdocaoService.destroy(id);
      }
}
