const { Sequelize } = require('sequelize');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

// Configuração direta do banco de dados usando variáveis de ambiente
const sequelize = new Sequelize({
  host: process.env.DB_HOST,         // Utiliza a variável de ambiente DB_HOST
  username: process.env.DB_USER,     // Utiliza a variável de ambiente DB_USER
  password: process.env.DB_PASS,     // Utiliza a variável de ambiente DB_PASS
  database: process.env.DB_NAME,     // Utiliza a variável de ambiente DB_NAME
  dialect: 'postgres',               // Dialeto do banco de dados
  logging: console.log,              // Habilita o log SQL para ver as queries executadas
  port: process.env.DB_PORT,         // Utiliza a variável de ambiente DB_PORT
});

// Testar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
