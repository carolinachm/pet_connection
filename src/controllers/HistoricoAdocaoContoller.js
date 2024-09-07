import HistoricoAdocaoService from "../services/HistoricoAdocaoService";

async function listarTodosHistoricosAdocao(req, res) {
  try {
    const historicoadocao = await HistoricoAdocaoService.listarTodoshistoricosAdocao();
    res.json(historicoadocao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarHistoricoAdocaoPorId(req, res) {
  try {
    const historicoadocao = await HistoricoAdocaoService.buscarhistoricoAdocaoPorId(req.params.id);
    if (historicoadocao) {
      res.json(historicoadocao);
    } else {
      res.status(400).json({ message: "Histórico de adoção não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarHistoricoAdocao(req, res) {
  try {
    const historicoadocao = await HistoricoAdocaoService.cadastrarHistoricoAdocao(req.body);
    res.status(201).json(historicoadocao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarHistoricoAdocao(req, res) {
  try {
    const historicoadocao = await HistoricoAdocaoService.atualizarHistoricoAdocao(req.params.id, req.body);
    if (historicoadocao) {
      res.json(await HistoricoAdocaoService.buscarHistoricoAdocaoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Histórico de adoção não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarHistoricoAdocao(req, res) {
  try {
    const historicoadocao = await HistoricoAdocaoService.deletarHistoricoAdocao(req.params.id);
    if (historicoadocao) {
      res.json({ message: "Histórico de adoção deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Histórico de adoção não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosHistoricosAdocao,
  buscarHistoricoAdocaoPorId,
  cadastrarHistoricoAdocao,
  atualizarHistoricoAdocao,
  deletarHistoricoAdocao,
};
