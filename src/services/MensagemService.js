const MensagemRepository = require('../repositories/MensagemRepository');

class MensagemService {

    async criarMensagem(data) {
        return await MensagemRepository.criarMensagem(data)
    }

    async buscarTodasMensagens() {
        return await MensagemRepository.bucarTodasMensagens();
    }

    async buscarMensagemPorId(id) {
        return await MensagemRepository.buscarMensagemPorId(id);
    }

    async atualizarMensagem(id, data) {
        try {
            const mensagemAtualizada = await MensagemRepository.atualizarMensagem(id, data);
            if (!mensagemAtualizada) {
                throw new Error("Mensagem não foi encontrada");
            }
            return mensagemAtualizada;
        } catch (error) {
            console.error(`Erro ao atualizar mensagem: ${id}`, error);
            throw new Error('Erro ao atualizar mensagem');
        }
    }
    async excluirMensagem(id) {
        return await MensagemRepository.excluirMensagem(id);
    }
}

module.exports = new MensagemService();