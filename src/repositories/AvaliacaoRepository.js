const { where } = require('sequelize');
const Avaliacao = require('../models/Avaliacao');

class AvaliacaoRepository{

    async criarAvaliacao(data){
        return await Avaliacao.create(data);
    }
    async buscarTodosAvaliacoes(){
        return await Avaliacao.findAll();
    }
    async buscarAvaliacaoPorId(id){
        return await Avaliacao.findByPk(id);
    }
    async atualizarAvaliacao(id, data){
        const avaliacao = await Avaliacao.findByPK(id);
        if(avaliacao){
            await Avaliacao.update(data, {where: {id}});
        }return await Avaliacao.findByPK(id);
        return null;
    }
    async excluirAvaliacao(id){
        const avaliacao = await Avaliacao.findByPK(id);
        if(avaliacao) return await Avaliacao.destroy();
    }
}
module.exports = new AvaliacaoRepository();