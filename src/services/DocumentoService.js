import DocumentoService from "../repositories/DocumentoRepository.js";

export default class DocumentoService {
    static async listarTodosDocumentos() {
        return await DocumentoService.findAll();
      }
      static async buscarDocumentoPorId(id) {
        return await DocumentoService.findByPk(id);
      }
      static async cadastrarDocumento(data) {
        return await DocumentoService.create(data);
      }
      static async atualizarDocumento(id, data) {
        return await DocumentoService.update(id, data);
      }
      static async deletarDocumento(id) {
        return await DocumentoService.destroy(id);
      }
}
