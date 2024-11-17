const Mensagem = require('../models/Mensagem');

class MensagemRepository{

    async criarMensagem(data){
        return await Mensagem.create(data);
    }
    async bucarTodasMensagens(){
        return await Mensagem.findAll();
    }
    async buscarMensagemPorId(id) {
        return await Mensagem.findByPk(id);
    }
    async atualizarMensagem(id, data) {
        const mensagem = await Mensagem.findByPk(id);
        if (mensagem) {
            await Mensagem.update(data, {where: { id } });
        }return await Mensagem.findByPk(id);
        return null;
    }
    async excluirMensagem(id) {
        const mensagem = await Mensagem.findByPk(id);
        if (mensagem) return await Mensagem.destroy();
        return null;
    }
}

module.exports = new MensagemRepository();