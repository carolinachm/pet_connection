import HistoricoMedicoService from "../services/HistoricoMedicoService";

async function listarTodosHistoricosMedico(req, res) {
  try {
    const historicomedico = await HistoricoMedicoService.listarTodosHistoricosMedico();
    res.json(historicomedico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarHistoricoMedicoPorId(req, res) {
  try {
    const historicomedico = await HistoricoMedicoService.buscarhistoricoMedicoPorId(req.params.id);
    if (historicomedico) {
      res.json(historicomedico);
    } else {
      res.status(400).json({ message: "Histórico médico não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarHistoricoMedico(req, res) {
  try {
    const historicomedico = await HistoricoMedicoService.cadastrarHistoricoMedico(req.body);
    res.status(201).json(historicomedico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarHistoricoMedico(req, res) {
  try {
    const historicomedico = await HistoricoMedicoService.atualizarHistoricoMedico(req.params.id, req.body);
    if (historicomedico) {
      res.json(await HistoricoMedicoService.buscarHistoricoMedicoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Histórico médico não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarHistoricoMedico(req, res) {
  try {
    const historimedico = await HistoricoMedicoService.deletarHistoricoMedico(req.params.id);
    if (historicomedico) {
      res.json({ message: "Histórico médico deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Histórico médico não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosHistoricosMedico,
  buscarHistoricoMedicoPorId,
  cadastrarHistoricoMedico,
  atualizarHistoricoMedico,
  deletarHistoricoMedico,
};
