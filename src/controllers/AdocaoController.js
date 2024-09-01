import AdocaoService from "../service/AdocaoService";

async function listarTodasAdocoes(req, res) {
  try {
    const adocoes = await AdocaoService.listarTodasAdocoes();
    res.json(adocoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarAdocaoPorId(req, res) {
  try {
    const adocao = await AdocaoService.buscarAdocaoPorId(req.params.id);
    if (adocao) {
      res.json(adocao);
    } else {
      res.status(404).json({ message: "Adoção não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarAdocao(req, res) {
  try {
    const adocao = await AdocaoService.cadastrarAdocao(req.body);
    res.status(201).json(adocao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarAdocao(req, res) {
  try {
    const adocao = await AdocaoService.atualizarAdocao(req.params.id, req.body);
    if (adocao) {
      res.json(await AdocaoService.buscarAdocaoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Adoção não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarAdocao(req, res) {
  try {
    const adocao = await AdocaoService.deletarAdocao(req.params.id);
    if (adocao) {
      res.json({ message: "Adoção deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Adoção não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default { listarTodasAdocoes, buscarAdocaoPorId, cadastrarAdocao, atualizarAdocao, deletarAdocao };
