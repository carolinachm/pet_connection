// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

    if (!token) return res.status(401).json({ message: 'Acesso negado' });

    try {
        const verified = jwt.verify(token, 'secreta-chave');
        req.usuario = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};

// Rota protegida
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Você tem acesso a esta rota protegida!', userId: req.user.id });
});
