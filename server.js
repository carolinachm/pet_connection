const express = require('express');
const usuarioRoutes = require('./src/routes/UsuarioRoutes');
const abrigoRoutes = require('./src/routes/AbrigoRoutes');

const sequelize = require('./src/config/database'); // Corrigido o caminho

const app = express();

app.use(express.json());
app.use(usuarioRoutes);
app.use(abrigoRoutes);

// Conectar ao banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados!');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
