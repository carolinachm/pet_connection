import Animal from "../models/AnimalModel";

export default class AnimalRepository {
  static async findAll() {
    return await Animal.findAll();
  }

  static async findByPk(id) {
    return await Animal.findByPk(id);
  }

  static async create(data) {
    return await Animal.create(data);
  }

  static async update(data, id) {
    return await Animal.update(data, { where: { id } });
  }

  static async destroy(id) {
    return await Animal.destroy({ where: { id } });
  }
}
