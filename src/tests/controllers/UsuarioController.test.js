// tests/controllers/UsuarioController.test.js
const request = require('supertest');
const server = require('../../../server'); // Sua aplicação Express
const UsuarioRepository = require('../../repositories/UsuarioRepository');

// Mock do repositório
jest.mock('../../repositories/UsuarioRepository');

describe('UsuarioController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('POST /api/usuarios - deve criar um usuário', async () => {
        const mockUsuario = { id: 3, nome: 'João', email: 'joao1@email.com' };
        UsuarioRepository.criarUsuario.mockResolvedValue(mockUsuario);

        const res = await request(server)
            .post('/api/usuarios')
            .send({ nome: 'João', email: 'joao1@email.com' });

        expect(res.status).toBe(201);
        expect(res.body).toEqual(mockUsuario);
        expect(UsuarioRepository.criarUsuario).toHaveBeenCalledWith({
            nome: 'João',
            email: 'joao1@email.com',
        });
    });

    test('GET /api/usuarios - deve listar todos os usuários', async () => {
        const mockUsuarios = [
            { id: 1, nome: 'João' },
            { id: 2, nome: 'Maria' },
        ];
        UsuarioRepository.buscarTodosUsuarios.mockResolvedValue(mockUsuarios);

        const res = await request(server).get('/api/usuarios');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockUsuarios);
        expect(UsuarioRepository.buscarTodosUsuarios).toHaveBeenCalled();
    });

    test('GET /api/usuarios/:id - deve retornar um usuário por ID', async () => {
        const mockUsuario = { id: 1, nome: 'João' };
        UsuarioRepository.buscarUsuarioPorId.mockResolvedValue(mockUsuario);

        const res = await request(server).get('/api/usuarios/1');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockUsuario);
        expect(UsuarioRepository.buscarUsuarioPorId).toHaveBeenCalledWith('1'); // IDs geralmente são strings
    });

    test('GET /api/usuarios/:id - deve retornar erro 404 se o usuário não existir', async () => {
        UsuarioRepository.buscarUsuarioPorId.mockResolvedValue(null);

        const res = await request(server).get('/api/usuarios/999');

        expect(res.status).toBe(404);
        expect(res.body).toEqual({ error: 'Usuário não encontrado' });
        expect(UsuarioRepository.buscarUsuarioPorId).toHaveBeenCalledWith('999');
    });

    test('PUT /api/usuarios/:id - deve atualizar um usuário', async () => {
        const mockUsuarioAtualizado = { id: 1, nome: 'João Atualizado' };
        UsuarioRepository.atualizarUsuario.mockResolvedValue(mockUsuarioAtualizado);

        const res = await request(server)
            .put('/api/usuarios/1')
            .send({ nome: 'João Atualizado' });

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockUsuarioAtualizado);
        expect(UsuarioRepository.atualizarUsuario).toHaveBeenCalledWith('1', {
            nome: 'João Atualizado',
        });
    });

    test('DELETE /api/usuarios/:id - deve excluir um usuário', async () => {
        const mockUsuario = { id: 1, nome: 'João' };
        UsuarioRepository.excluirUsuario.mockResolvedValue(mockUsuario);

        const res = await request(server).delete('/api/usuarios/1');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Usuário deletado' });
        expect(UsuarioRepository.excluirUsuario).toHaveBeenCalledWith('1');
    });

    test('DELETE /api/usuarios/:id - deve retornar erro 404 se o usuário não existir', async () => {
        UsuarioRepository.excluirUsuario.mockResolvedValue(null);

        const res = await request(server).delete('/api/usuarios/999');

        expect(res.status).toBe(404);
        expect(res.body).toEqual({ error: 'Usuário não encontrado' });
        expect(UsuarioRepository.excluirUsuario).toHaveBeenCalledWith('999');
    });
});
