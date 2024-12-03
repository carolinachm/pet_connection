const AdocaoService = require('../services/AdocaoService');

class AdocaoController{

    async criarAdocao(req, res){
        try {
            const adocao = await AdocaoService.criarAdocao(req.body);
            res.status(201).json(adocao)
        } catch (error) {
            res.status(500).json({ error: ' Erro ao criar a adoção'})
        }
    }

    async buscarTodasAdocoes(req, res){
        try {
            const adocoes = await AdocaoService.buscarTodasAdocoes();
            res.status(200).json(adocoes)
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar adoções'})
        }
    }
}

module.exports = new AdocaoController();