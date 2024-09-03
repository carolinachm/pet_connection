import Adocao from "../models/AdocaoModel";

export default class Adocao {
  static async findAll() {
    return await Adocao.findAll();
  }
  static async findByPk(id) {
    return await Adocao.findByPk(id);
  }
  static async create(data) {
    return await Adocao.create(data);
  }
  static async update(data, id) {
    return await Adocao.update(data, { where: { id } });
  }
  static async destroy(id) {
    return await Adocao.destroy({ where: { id } });
  }
}
