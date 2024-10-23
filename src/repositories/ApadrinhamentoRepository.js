import Apadrinhamento from "../models/ApadrinhamentolModel";

export default class ApadrinhamentoRepository {
  static async findAll() {
    return await Apadrinhamento.findAll();
  }

  static async findByPk(id) {
    return await Apadrinhamento.findByPk(id);
  }

  static async create(data) {
    return await Apadrinhamento.create(data);
  }

  static async update(data, id) {
    return await Apadrinhamento.update(data, { where: { id } });
  }

  static async destroy(id) {
    return await Apadrinhamento.destroy({ where: { id } });
  }
}
