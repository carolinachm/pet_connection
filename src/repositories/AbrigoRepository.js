import Abrigo from "../models/AbrigoModel.js";

export default class AbrigoRepository {
    static async findAll() {
        return await Abrigo.findAll();
    }
    static async findByPk(id) {
        return await Abrigo.findByPk(id);
    }
    static async create(data) {
        return await Abrigo.create(data);
    }
    static async update(data, id) {
        return await Abrigo.update(data, { where: { id } });
    }
    static async destroy(id) {
        return await Abrigo.destroy({ where: { id }});
    }
}