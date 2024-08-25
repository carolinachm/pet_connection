// Importa o serviço de usuários.
import UsuarioService from "../services/UsuarioService.js";

// Função para listar todos os usuários.
async function listarTodos(req, res) {
  try {
    const usuarios = await UsuarioService.listarTodos();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função para buscar um usuário pelo ID.
async function buscarUsuarioPorId(req, res) {
  try {
    const usuario = await UsuarioService.buscarUsuarioPorId(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função para cadastrar um novo usuário.
async function cadastraUsuario(req, res) {
  try {
    const usuario = await UsuarioService.cadastraUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função para atualizar um usuário existente.
async function atualizarUsuario(req, res) {
  try {
    const usuario = await UsuarioService.atualizarUsuario(req.params.id, req.body);
    if (usuario) {
      res.json(await UsuarioService.buscarUsuarioPorId(req.params.id));
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função para deletar um usuário.
async function deletarUsuario(req, res) {
  try {
    const usuario = await UsuarioService.deletarUsuario(req.params.id);
    if (usuario) {
      res.json({ message: "Usuário deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Exporta as funções do controlador.
export default { listarTodos, buscarUsuarioPorId, cadastraUsuario, atualizarUsuario, deletarUsuario };
