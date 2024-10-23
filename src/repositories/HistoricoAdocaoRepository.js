import HistoricoAdocao from "../models/HistoricoAdocaoModel";

export default class HistoricoAdocao {
  static async findAll() {
    return await HistoricoAdocao.findAll();
  }
  static async findByPk(id) {
    return await HistoricoAdocao.findByPk(id);
  }
  static async create(data) {
    return await HistoricoAdocao.create(data);
  }
  static async update(data, id) {
    return await HistoricoAdocao.update(data, { where: { id } });
  }
  static async destroy(id) {
    return await HistoricoAdocao.destroy({ where: { id } });
  }
}
