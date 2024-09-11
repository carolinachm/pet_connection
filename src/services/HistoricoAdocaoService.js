import HistoricoAdocaoService from "../repositories/HistoricoAdocaoRepository";

export default class HistoricoAdocaoService {
    static async listarTodosHistoricosAdocoes() {
        return await HistoricoAdocaoService.findAll();
      }
      static async buscarHistoricoAdocaoPorId(id) {
        return await HistoricoAdocaoService.findByPk(id);
      }
      static async cadastrarHistoricoAdocao(data) {
        return await HistoricoAdocaoService.create(data);
      }
      static async atualizarHistoricoAdocao(id, data) {
        return await HistoricoAdocaoService.update(id, data);
      }
      static async deletarHistoricoAdocao(id) {
        return await HistoricoAdocaoService.destroy(id);
      }
}
