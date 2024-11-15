// src/middlewares/errorHandler.js

// Middleware para captura de erros
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo deu errado', error: err.message });
};

module.exports = { errorHandler };
