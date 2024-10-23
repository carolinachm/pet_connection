import Documento from "../models/DocumentolModel";

export default class DocumentoRepository {
  static async findAll() {
    return await Documento.findAll();
  }

  static async findByPk(id) {
    return await Documento.findByPk(id);
  }

  static async create(data) {
    return await Documento.create(data);
  }

  static async update(data, id) {
    return await Documento.update(data, { where: { id } });
  }

  static async destroy(id) {
    return await Documento.destroy({ where: { id } });
  }
}
