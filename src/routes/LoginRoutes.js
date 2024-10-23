const jwt = require('jsonwebtoken');

// Rota de login
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    // Checar se o usuário existe
    const usuario = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
    if (usuario.rows.length === 0) {
        return res.status(400).json({ message: 'Email ou senha incorretos' });
    }

    // Comparar a senha
    const validPassword = await bcrypt.compare(senha, usuario.rows[0].password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Email ou senha incorretos' });
    }

    // Gerar o token JWT
    const token = jwt.sign({ id: usuario.rows[0].id }, 'secreta-chave', { expiresIn: '1h' });

    res.status(200).json({ token });
});

module.exports = router;
