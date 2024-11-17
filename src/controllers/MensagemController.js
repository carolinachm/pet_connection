const MensagemService = require('../services/MensagemService');

class MensagemController {

    async criarMensagem(req, res) {
        try{
            const mensagem = await MensagemService.criarMensagem(req.body);
            res.status(201).json(mensagem);
        }catch(error){
            res.status(500).json({ error: 'Erro ao criar mensagem' });
        }
    }
    async buscarTodasMensagens(req, res) {
        try{
            const mensagem = await MensagemService.buscarTodasMensagens();
            res.status(200).json(mensagem);
        }catch(error){
            res.status(500).json({ error: 'Erro ao listar todas as mensagens' });
        }
    }
    async buscarMensagemPorId(req, res) {
        try{
            const mensagem = await MensagemService.buscarMensagemPorId(req.params.id);
            res.status(200).json(mensagem);
        }catch(error){
            res.status(500).json({ error: 'Erro ao buscar uma mensagem' });
        }
    }
    async atualizarMensagem(req, res) {
        try {
            const mensagem = await MensagemService.atualizarMensagem(req.params.id, req.body);
            if(mensagem) res.status(200).json(mensagem);
            else res.status(404).json({error : 'Mensagem não encontrda'});
        }catch(error){
            res.status(500).json({ error: 'Erro ao atualizar mensagem' });
        }
    }
    async excluirMensagem(req, res) {
        try {
            const mensagem = await MensagemService.excluirMensagem(req.params.id);
            res.status(204).json(mensagem);
        }catch(error){
            res.status(500).json({ error: 'Erro ao excluir Mensagem' });
        }
    }
}
module.exports = new MensagemController();