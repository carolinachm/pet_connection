import HistoricoMedicoService from "../repositories/HistoricoMedicoRepository";

export default class HistoricoMedicoService {
    static async listarTodosHistoricosMedico() {
        return await HistoricoMedicoService.findAll();
      }
      static async buscarHistoricoMedicoPorId(id) {
        return await HistoricoMedicoService.findByPk(id);
      }
      static async cadastrarHistoricoMedico(data) {
        return await HistoricoMedicoService.create(data);
      }
      static async atualizarHistoricoMedico(id, data) {
        return await HistoricoMedicoService.update(id, data);
      }
      static async deletarHistoricoMedico(id) {
        return await HistoricoMedicoService.destroy(id);
      }
}
