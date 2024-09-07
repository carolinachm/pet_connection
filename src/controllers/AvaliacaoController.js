import AvaliacaoService from "../services/AvaliacaoService";

async function listarTodasAvaliacoes(req, res) {
  try {
    const avaliacao = await AvaliacaoService.listarTodasAvaliacoes();
    res.json(avaliacao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarAvaliacaoPorId(req, res) {
  try {
    const avaliacao = await AvaliacaoService.buscarAvaliacaoPorId(req.params.id);
    if (avaliacao) {
      res.json(avaliacao);
    } else {
      res.status(400).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarAvaliacao(req, res) {
  try {
    const avaliacao = await AvaliacaoService.cadastrarAvaliacao(req.body);
    res.status(201).json(avaliacao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarAvaliacao(req, res) {
  try {
    const avaliacao = await AvaliacaoService.atualizarAvaliacao(req.params.id, req.body);
    if (avaliacao) {
      res.json(await AvaliacaoService.buscarAvaliacaoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarAvaliacao(req, res) {
  try {
    const avaliacao = await AvaliacaoService.deletarAvaliacao(req.params.id);
    if (avaliacao) {
      res.json({ message: "Avaliação deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodasAvaliacoes,
  buscarAvaliacaoPorId,
  cadastrarAvaliacao,
  atualizarAvaliacao,
  deletarAvaliacao,
};
