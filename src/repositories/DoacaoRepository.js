const Doacao = require('../models/Doacao');

class DoacaoRepository{
    async criarDoacao(data) {
        return await Doacao.create(data);
    }

    async buscarTodosDoacoes() {
        return await Doacao.findAll();
    }

    async buscarDoacaoPorId(id) {
        return await Doacao.findByPk(id);
    }

    async atualizarDoacao(id, data) {
        const doacao = await Doacao.findByPk(id);
        if (doacao) return await doacao.update(data);
        return null;
    }

    async excluirDoacao(id) {
        const Doacao = await Doacao.findByPk(id);
        if (Doacao) return await Doacao.destroy();
        return null;
    }
}

module.exports = new DoacaoRepository();
