import HistoricoMedico from "../models/HistoricoMedicoModel";

export default class HistoricoMedico {
  static async findAll() {
    return await HistoricoMedico.findAll();
  }
  static async findByPk(id) {
    return await HistoricoMedico.findByPk(id);
  }
  static async create(data) {
    return await HistoricoMedico.create(data);
  }
  static async update(data, id) {
    return await HistoricoMedico.update(data, { where: { id } });
  }
  static async destroy(id) {
    return await HistoricoMedico.destroy({ where: { id } });
  }
}
