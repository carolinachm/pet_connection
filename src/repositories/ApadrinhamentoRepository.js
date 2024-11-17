const Apadrinhamento = require('../models/Apadrinhamento');

class ApadrinhamentoRepository {
  // Criar Apadrinhamento
  async criarApadrinhamento(data) {
    return await Apadrinhamento.create(data);
  }

  // Buscar todos os animais
  async buscarTodosApadrinhamentos() {
    return await Apadrinhamento.findAll();
  }

  // Buscar Apadrinhamento por ID
  async buscarApadrinhamentoPorId(id) {
    return await Apadrinhamento.findByPk(id);
  }

  // Atualizar Apadrinhamento
  async atualizarApadrinhamento(id, data) {
    const apadrinhamento = await Apadrinhamento.findByPk(id);
    if (apadrinhamento) {
       await Apadrinhamento.update(data, { where: { id } });
    }return await Apadrinhamento.findByPk(id);
    return null;
  }

  // Excluir Apadrinhamento
  async excluirApadrinhamento(id) {
    const Apadrinhamento = await Apadrinhamento.findByPk(id);
    if (Apadrinhamento) {
      return await Apadrinhamento.destroy();
    }
    return null;
  }
}

module.exports = new ApadrinhamentoRepository();
