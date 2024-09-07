import DocumentoService from "../services/DocumentoService";

async function listarTodosDocumentos(req, res) {
  try {
    const documento = await DocumentoService.listarTodosDocumentos();
    res.json(documento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buscarDocumentoPorId(req, res) {
  try {
    const documento = await DocumentoService.buscarDocumentoPorId(req.params.id);
    if (documento) {
      res.json(documento);
    } else {
      res.status(404).json({ message: "Documento não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function cadastrarDocumento(req, res) {
  try {
    const documento = await DocumentoService.cadastrarDocumento(req.body);
    res.status(201).json(documento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function atualizarDocumento(req, res) {
  try {
    const documento = await DocumentoService.atualizarDocumento(req.params.id, req.body);
    if (documento) {
      res.json(await DocumentoService.buscarDocumentoPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Documento não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletarDocumento(req, res) {
  try {
    const documento = await DocumentoService.deletarDocumento(req.params.id);
    if (documento) {
      res.json({ message: "Documento deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Documento não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listarTodosDocumentos,
  buscarDocumentoPorId,
  cadastrarDocumento,
  atualizarDocumento,
  deletarDocumento,
};
