const express = require('express');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const router = express.Router();
const pool = new Pool();  // Configurar a pool de conexões com seu PostgreSQL

// Rota para registrar o usuário
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Checar se o usuário já existe
    const userExist = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
    if (userExist.rows.length > 0) {
        return res.status(400).json({ message: 'Email já registrado' });
    }

    // Criar o hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Inserir o novo usuário no banco de dados
    try {
        await pool.query(
            'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3)',
            [name, email, hashedPassword]
        );
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar o usuário' });
    }
});

module.exports = router;
