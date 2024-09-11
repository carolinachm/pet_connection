import MensagemService from "../services/MensagemService";

async function listarTodasMensagens(req, res) {
  try {
    const mensagens = await MensagemService.listarTodasMensagens();
    res.json(mensagens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarMensagemPorId(req, res) {
  try {
    const mensagem = await MensagemService.buscarMensagemPorId(req.params.id);
    if (mensagem) {
      res.json(mensagem);
    } else {
      res.status(404).json({ message: "Mensagem não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarMensagem(req, res) {
  try {
    const mensagem = await MensagemService.cadastrarMensagem(req.body);
    res.status(201).json(mensagem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarMensagem(req, res) {
  try {
    const mensagem = await MensagemService.atualizarMensagem(req.params.id, req.body);
    if (mensagem) {
      res.json(await MensagemService.buscarMensagemPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Mensagem não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarMensagem(req, res) {
  try {
    const mensagem = await MensagemService.deletarMensagem(req.params.id);
    if (mensagem) {
      res.json({ message: "Mensagem deletada com sucesso" });
    } else {
      res.status(404).json({ message: "Mensagem não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodasMensagens,
  buscarMensagemPorId,
  cadastrarMensagem,
  atualizarMensagem,
  deletarMensagem,
};
