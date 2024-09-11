import Avaliacao from "../models/AvaliacaoModel";

export default class AvaliacaoRepository {
  static async findAll() {
    return await Avaliacao.findAll();
  }

  static async findByPk(id) {
    return await Avaliacao.findByPk(id);
  }

  static async create(data) {
    return await Avaliacao.create(data);
  }

  static async update(data, id) {
    return await Avaliacao.update(data, { where: { id } });
  }

  static async destroy(id) {
    return await Avaliacao.destroy({ where: { id } });
  }
}
