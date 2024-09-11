import DoacaoService from "../services/DoacaoService";

async function listarTodasDoacoes(req, res) {
  try {
    const doacoes = await DoacaoService.listarTodasDoacoes();
    res.json(doacoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarDoacaoPorId(req, res) {
  try {
    const doacao = await DoacaoService.buscarDoacaoPorId(req.params.id);
    if (doacao) {
      res.json(doacao);
    } else {
      res.status(404).json({ message: "Doação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarDoacao(req, res) {
  try {
    const doacao = await DoacaoService.cadastrarDoacao(req.body);
    res.status(201).json(doacao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarDoacao(req, res) {
  try {
    const doacao = await DoacaoService.atualizarDoacao(req.params.id, req.body);
    if (doacao) {
      res.json(await DoacaoService.buscarDoacaoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Doação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarDoacao(req, res) {
  try {
    const doacao = await DoacaoService.deletarDoacao(req.params.id);
    if (doacao) {
      res.json({ message: "Doação deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Doação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodasDoacoes,
  buscarDoacaoPorId,
  cadastrarDoacao,
  atualizarDoacao,
  deletarDoacao,
};

