import ApadrinhamentoService from "../services/ApadrinhamentoService";

async function listarTodosApadrinhamento(req, res) {
  try {
    const apadrinhamento = await ApadrinhamentoService.listarTodosApadrinhamento();
    res.json(apadrinhamento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarApadrinhamentoPorId(req, res) {
  try {
    const apadrinhamento = await ApadrinhamentoService.buscarApadrinhamentoPorId(req.params.id);
    if (apadrinhamento) {
      res.json(apadrinhamento);
    } else {
      res.status(400).json({ message: "Apadrinhamento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarApadrinhamento(req, res) {
  try {
    const apadrinhamento = await ApadrinhamentoService.cadastrarApadrinhamento(req.body);
    res.status(201).json(apadrinhamento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarApadrinhamento(req, res) {
  try {
    const apadrinhamento = await ApadrinhamentoService.atualizarApadrinhamento(req.params.id, req.body);
    if (apadrinhamento) {
      res.json(await ApadrinhamentoService.buscarApadrinhamentoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Apadrinhamento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarApadrinhamento(req, res) {
  try {
    const apadrinhamento = await ApadrinhamentoService.deletarApadrinhamento(req.params.id);
    if (apadrinhamento) {
      res.json({ message: "Apadrinhamento deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Apadrinhamento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosApadrinhamento,
  buscarApadrinhamentoPorId,
  cadastrarApadrinhamento,
  atualizarApadrinhamento,
  deletarApadrinhamento,
};
