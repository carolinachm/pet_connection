import PreferenciaService from "../services/PreferenciaService";

async function listarTodasPreferencias(req, res) {
  try {
    const preferencia = await PreferenciaService.listarTodasPreferencias();
    res.json(preferencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarPreferenciaPorId(req, res) {
  try {
    const preferencia = await PreferenciaService.buscarPreferenciaPorId(req.params.id);
    if (preferencia) {
      res.json(preferencia);
    } else {
      res.status(400).json({ message: "Preferência não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarPreferencia(req, res) {
  try {
    const preferencia = await PreferenciaService.cadastrarPreferencia(req.body);
    res.status(201).json(preferencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarPreferencia(req, res) {
  try {
    const preferencia = await PreferenciaService.atualizarPreferencia(req.params.id, req.body);
    if (preferencia) {
      res.json(await PreferenciaService.buscarPreferenciaPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Preferência não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarPreferencia(req, res) {
  try {
    const preferencia = await PreferenciaService.deletarPreferencia(req.params.id);
    if (preferencia) {
      res.json({ message: "Preferência deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Preferência não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodasPreferencias,
  buscarPreferenciaPorId,
  cadastrarPreferencia,
  atualizarPreferencia,
  deletarPreferencia,
};
