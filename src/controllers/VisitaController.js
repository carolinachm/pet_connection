import VisitaService from "../services/VisitaService";

async function listarTodasVisitas(req, res) {
  try {
    const visita = await VisitaService.listarTodasVisitas();
    res.json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarVisitaPorId(req, res) {
  try {
    const visita = await VisitaService.buscarVisitaPorId(req.params.id);
    if (visita) {
      res.json(visita);
    } else {
      res.status(400).json({ message: "Visita não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarVisita(req, res) {
  try {
    const visita = await VisitaService.cadastrarVisita(req.body);
    res.status(201).json(visita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarVisita(req, res) {
  try {
    const visita = await VisitaService.atualizarVisita(req.params.id, req.body);
    if (visita) {
      res.json(await VisitaService.buscarVisitaPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Visita não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarVisita(req, res) {
  try {
    const visita = await VisitaService.deletarVisita(req.params.id);
    if (visita) {
      res.json({ message: "Visita deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Visita não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodasVisitas,
  buscarVisitaPorId,
  cadastrarVisita,
  atualizarVisita,
  deletarVisita,
};
