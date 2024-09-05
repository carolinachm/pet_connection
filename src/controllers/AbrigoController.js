import AbrigoService from "../services/AbrigoService.js";

async function listarTodosAbrigos(req, res) {
  try {
    const abrigos = await AbrigoService.listarTodosAbrigos();
    res.json(abrigos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarAbrigoPorId(req, res) {
  try {
    const abrigo = await AbrigoService.buscarAbrigoPorId(req.params.id);
    if (abrigo) {
      res.json(abrigo);
    } else {
      res.status(400).json({ message: "Abrigo não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarAbrigo(req, res) {
  try {
    const abrigo = await AbrigoService.cadastrarAbrigo(req.body);
    res.status(201).json(abrigo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarAbrigo(req, res) {
  try {
    const abrigo = await AbrigoService.atualizarAbrigo(req.params.id, req.body);
    if (abrigo) {
      res.json(await AbrigoService.buscarAbrigoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Abrigo não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarAbrigo(req, res) {
  try {
    const abrigo = await AbrigoService.deletarAbrigo(req.params.id);
    if (abrigo) {
      res.json({ message: "Abrigo deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Abrigo não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosAbrigos,
  buscarAbrigoPorId,
  cadastrarAbrigo,
  atualizarAbrigo,
  deletarAbrigo,
};
