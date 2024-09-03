import AbrigoRepository from "../repositories/AbrigoRepository";

export default class AbrigoService {
  static async listarTodosAbrigos() {
    return await AbrigoRepository.findAll();
  }
  static async buscarAbrigoPorId(id) {
    return await AbrigoRepository.findByPk(id);
  }
  static async cadastrarAbrigo(data) {
    return await AbrigoRepository.create(data);
  }
  static async atualizarAbrigo(id, data) {
    return await AbrigoRepository.update(id, data);
  }
  static async deletarAbrigo(id) {
    return await AbrigoRepository.destroy(id);
  }
}
