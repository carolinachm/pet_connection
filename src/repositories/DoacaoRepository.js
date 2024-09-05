import Doacao from "../models/DoacaolModel";

export default class DoacaoRepository {
  static async findAll() {
    return await Doacao.findAll();
  }

  static async findByPk(id) {
    return await Doacao.findByPk(id);
  }

  static async create(data) {
    return await Doacao.create(data);
  }

  static async update(data, id) {
    return await Doacao.update(data, { where: { id } });
  }

  static async destroy(id) {
    return await Doacao.destroy({ where: { id } });
  }
}
