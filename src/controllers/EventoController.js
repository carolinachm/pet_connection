import EventoService from "../services/EventoService";

async function listarTodosEventos(req, res) {
  try {
    const evento = await EventoService.listarTodosEventos();
    res.json(evento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarEventoPorId(req, res) {
  try {
    const evento = await EventoService.buscarEventoPorId(req.params.id);
    if (evento) {
      res.json(evento);
    } else {
      res.status(400).json({ message: "Evento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarEvento(req, res) {
  try {
    const evento = await eventoService.cadastrarEvento(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarEvento(req, res) {
  try {
    const evento = await EventoService.atualizarEvento(req.params.id, req.body);
    if (evento) {
      res.json(await EventoService.buscarEventoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Evento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarEvento(req, res) {
  try {
    const evento = await EventoService.deletarEvento(req.params.id);
    if (evento) {
      res.json({ message: "Evento deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Evento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosEventos,
  buscarEventoPorId,
  cadastrarEvento,
  atualizarEvento,
  deletarEvento,
};
