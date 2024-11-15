const express = require('express');
const sequelize = require('./src/config/database'); // Banco de dados
const dotenv = require('dotenv');
const { errorHandler } = require('./src/middleware/errorHandler');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Configuração de middleware
app.use(express.json());  // Para parsing de JSON
app.use(express.urlencoded({ extended: true }));  

const usuarioRoutes = require('./src/routes/UsuarioRoutes');
const abrigoRoutes = require('./src/routes/AbrigoRoutes');
const animalRoutes = require('./src/routes/AnimalRoutes');
const apadrinhamentoRoutes = require("./src/routes/ApadrinhamentoRoutes");

app.use('/api', usuarioRoutes);
app.use('/api', abrigoRoutes);
app.use('/api', animalRoutes);
app.use('/api', apadrinhamentoRoutes);

// Função para conectar ao banco de dados
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); // Encerra o servidor caso falhe a conexão com o banco
    }
};

// Conectar ao banco de dados
connectDB();
sequelize.sync({ force: true })  // ATENÇÃO: Isso pode apagar dados existentes! Use com cautela em produção
    .then(() => {
        console.log('Banco de dados sincronizado!');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });


// Middleware de tratamento de erros (deve ser colocado após as rotas)
app.use(errorHandler);

// Configuração da porta
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
