const express = require('express');
const sequelize = require('./src/config/database'); // Conexão com o banco de dados
const dotenv = require('dotenv');
const { errorHandler } = require('./src/middleware/errorHandler');

// Carregar variáveis de ambiente (não é mais necessário para a porta)
dotenv.config();

const app = express();

// Configuração de middleware
app.use(express.json());  // Para parsing de JSON
app.use(express.urlencoded({ extended: true }));  

const usuarioRoutes = require('./src/routes/UsuarioRoutes');
const abrigoRoutes = require('./src/routes/AbrigoRoutes');
const animalRoutes = require('./src/routes/AnimalRoutes');
const apadrinhamentoRoutes = require("./src/routes/ApadrinhamentoRoutes");
const eventoRoutes = require("./src/routes/EventoRoutes");
const doacaoRoutes = require("./src/routes/DoacaoRoutes");
const mensagemRoutes = require("./src/routes/MensagemRoutes");

app.use('/api', usuarioRoutes);
app.use('/api', abrigoRoutes);
app.use('/api', animalRoutes);
app.use('/api', apadrinhamentoRoutes);
app.use('/api', eventoRoutes);
app.use('/api', doacaoRoutes);
app.use('/api', mensagemRoutes);

// Função para conectar ao banco de dados
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados bem-sucedida!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
        process.exit(1); // Encerra o servidor caso falhe a conexão com o banco
    }
};

// Conectar ao banco de dados
connectDB();

// Alterar as tabelas sem apagar os dados
sequelize.sync({ alter : true })  // Alteração segura (não apaga dados)
    .then(() => {
        console.log('Banco de dados sincronizado!');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });

// Middleware de tratamento de erros (deve ser colocado após as rotas)
app.use(errorHandler);

// Configuração da porta (definindo diretamente, sem variável de ambiente)
const PORT = 3000;  // Definindo a porta diretamente no código
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
