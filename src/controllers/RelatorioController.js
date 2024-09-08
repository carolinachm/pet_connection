import RelatorioService from "../services/RelatorioService";

async function listarTodosRelatorios(req, res) {
  try {
    const relatorio = await RelatorioService.listarTodosRelatorios();
    res.json(relatorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarRelatorioPorId(req, res) {
  try {
    const relatorio = await RelatorioService.buscarRelatorioPorId(req.params.id);
    if (relatorio) {
      res.json(abrigo);
    } else {
      res.status(400).json({ message: "Relatório não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarRelatorio(req, res) {
  try {
    const relatorio = await RelatorioService.cadastrarRelatorio(req.body);
    res.status(201).json(relatorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarRelatorio(req, res) {
  try {
    const relatorio = await RelatorioService.atualizarRelatorio(req.params.id, req.body);
    if (relatorio) {
      res.json(await RelatorioService.buscarRelatorioPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Relatório não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarRelatorio(req, res) {
  try {
    const relatorio = await RelatorioService.deletarRelatorio(req.params.id);
    if (relatorio) {
      res.json({ message: "Relatório deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Relatório não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosRelatorios,
  buscarRelatorioPorId,
  cadastrarRelatorio,
  atualizarRelatorio,
  deletarRelatorio,
};
