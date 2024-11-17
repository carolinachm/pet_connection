// tests/services/UsuarioService.test.js
const UsuarioService = require('../../services/UsuarioService');
const UsuarioRepository = require('../../repositories/UsuarioRepository');

// Mock do repositório
jest.mock('../../repositories/UsuarioRepository');

describe('UsuarioService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('criarUsuario - deve criar um usuário com sucesso', async () => {
        const mockData = { nome: 'João', email: 'joao@email.com', foto: 'path/to/foto.jpg' };
        UsuarioRepository.criarUsuario.mockResolvedValue(mockData);

        const result = await UsuarioService.criarUsuario(mockData);

        expect(result).toEqual(mockData);
        expect(UsuarioRepository.criarUsuario).toHaveBeenCalledWith(mockData);
    });

    test('criarUsuario - deve lançar erro ao falhar', async () => {
        UsuarioRepository.criarUsuario.mockRejectedValue(new Error('Erro ao criar usuário'));

        await expect(UsuarioService.criarUsuario({})).rejects.toThrow('Erro ao criar usuário');
        expect(UsuarioRepository.criarUsuario).toHaveBeenCalled();
    });

    test('buscarTodosUsuarios - deve retornar todos os usuários', async () => {
        const mockUsuarios = [
            { id: 1, nome: 'João' },
            { id: 2, nome: 'Maria' },
        ];
        UsuarioRepository.buscarTodosUsuarios.mockResolvedValue(mockUsuarios);

        const result = await UsuarioService.buscarTodosUsuarios();

        expect(result).toEqual(mockUsuarios);
        expect(UsuarioRepository.buscarTodosUsuarios).toHaveBeenCalled();
    });

    test('buscarUsuarioPorId - deve retornar um usuário existente', async () => {
        const mockUsuario = { id: 2, nome: 'João Silva Atualizado outra vez 2' };
        UsuarioRepository.buscarUsuarioPorId.mockResolvedValue(mockUsuario);

        const result = await UsuarioService.buscarUsuarioPorId(1);

        expect(result).toEqual(mockUsuario);
        expect(UsuarioRepository.buscarUsuarioPorId).toHaveBeenCalledWith(1);
    });

    test('buscarUsuarioPorId - deve lançar erro ao não encontrar usuário', async () => {
        UsuarioRepository.buscarUsuarioPorId.mockResolvedValue(null);

        await expect(UsuarioService.buscarUsuarioPorId(999)).rejects.toThrow('Usuário não encontrado');
        expect(UsuarioRepository.buscarUsuarioPorId).toHaveBeenCalledWith(999);
    });

    test('atualizarUsuario - deve atualizar um usuário com sucesso', async () => {
        const mockUsuario = { id: 1, nome: 'ze da manga da Silva Atualizado' };
        UsuarioRepository.atualizarUsuario.mockResolvedValue(mockUsuario);

        const result = await UsuarioService.atualizarUsuario(1, { nome: 'ze da manga da Silva Atualizado' });

        expect(result).toEqual(mockUsuario);
        expect(UsuarioRepository.atualizarUsuario).toHaveBeenCalledWith(1, { nome: 'ze da manga da Silva Atualizado' });
    });

    test('atualizarUsuario - deve lançar erro ao não encontrar usuário', async () => {
        UsuarioRepository.atualizarUsuario.mockResolvedValue(null);

        await expect(UsuarioService.atualizarUsuario(999, {})).rejects.toThrow('Usuário não encontrado para atualização');
        expect(UsuarioRepository.atualizarUsuario).toHaveBeenCalledWith(999, {});
    });

    test('excluirUsuario - deve excluir um usuário com sucesso', async () => {
        const mockUsuario = { id: 1, nome: 'ze da manga da Silva Atualizado' };
        UsuarioRepository.excluirUsuario.mockResolvedValue(mockUsuario);

        const result = await UsuarioService.excluirUsuario(1);

        expect(result).toEqual(mockUsuario);
        expect(UsuarioRepository.excluirUsuario).toHaveBeenCalledWith(1);
    });

    test('excluirUsuario - deve lançar erro ao não encontrar usuário', async () => {
        UsuarioRepository.excluirUsuario.mockResolvedValue(null);

        await expect(UsuarioService.excluirUsuario(999)).rejects.toThrow('Usuário não encontrado para exclusão');
        expect(UsuarioRepository.excluirUsuario).toHaveBeenCalledWith(999);
    });
});
