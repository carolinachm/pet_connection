const Abrigo = require('../models/Abrigo');

class AbrigoRepository{
    async criarAbrigo(data) {
        return await Abrigo.create(data);
    }

    async buscarTodosAbrigos() {
        return await Abrigo.findAll();
    }

    async buscarAbrigoPorId(id) {
        return await Abrigo.findByPk(id);
    }

    async atualizarAbrigo(id, data) {
        const abrigo = await Abrigo.findByPk(id);
        if (abrigo) {
            await Abrigo.update(data, {where: {id}})
        } return await Abrigo.findByPk(id);
        return null;
    }

    async excluirAbrigo(id) {
        const abrigo = await Abrigo.findByPk(id);
        if (abrigo) return await Abrigo.destroy();
        return null;
    }
}

module.exports = new AbrigoRepository();
