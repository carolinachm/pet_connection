// Importa o módulo Express.
const express = require('express');

// Importa a configuração do banco de dados.
const db = require('./src/config/db.js');

// Importa as rotas de usuários.
const usuarioRoutes = require('./src/routes/UsuarioRoute.js');

// Cria uma instância do Express.
const app = express();

// Adiciona middleware para analisar o corpo das requisições como JSON.
app.use(express.json());

// Sincroniza o banco de dados e exibe uma mensagem no console.
db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

// Define as rotas de usuários.
app.use("/api", usuarioRoutes);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3001, () => console.log("Servidor iniciado na porta 3001"));

