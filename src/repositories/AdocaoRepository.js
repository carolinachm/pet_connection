const Adocao = require('../models/Adocao')

class AdocaoRepository{

    async criarAdocao(data){
        return await Adocao.create(data);
    }

    async buscarTodasAdoçoes(){
        return await Adocao.findAll();
    }

    async buscarAdocaoPorId(id){
        return await Adocao.findById(id);
    }

    async atualizarAdocao(id, data){
        const adocao = await Adocao.findById(id);
        if(adocao){
            await Adocao.update(data, {where: {id}});
        } return await Adocao.findById(id);
       return null;
    }

    async excluirAdocao(id){
        const adocao = await Adocao.findById(id);
        if(adocao) return await Adocao.destroy();
        return null;
    }
}

module.exports = new AdocaoRepository();