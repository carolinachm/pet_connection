import VoluntarioService from "../services/VoluntarioService";

async function listarTodosVoluntarios(req, res) {
  try {
    const voluntario = await VoluntarioService.listarTodosVoluntarios();
    res.json(voluntario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarVoluntarioPorId(req, res) {
  try {
    const voluntario = await VoluntarioService.buscarVoluntarioPorId(req.params.id);
    if (voluntario) {
      res.json(voluntario);
    } else {
      res.status(404).json({ message: "Voluntario não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarVoluntario(req, res) {
  try {
    const voluntario = await VoluntarioService.cadastrarVoluntario(req.body);
    res.status(201).json(voluntario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarVoluntario(req, res) {
  try {
    const voluntario = await VoluntarioService.atualizarVoluntario(req.params.id, req.body);
    if (voluntario) {
      res.json(await VoluntarioService.buscarVoluntarioPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Voluntario não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarVoluntario(req, res) {
  try {
    const voluntario = await VoluntarioService.deletarVoluntario(req.params.id);
    if (voluntario) {
      res.json({ message: "Voluntario deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Voluntario não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosVoluntarios,
  buscarVoluntarioPorId,
  cadastrarVoluntario,
  atualizarVoluntario,
  deletarVoluntario,
};
