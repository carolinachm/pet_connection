// Importa a classe Sequelize do módulo sequelize.
import { Sequelize } from "sequelize";
// Importa a configuração do banco de dados.
import db from "../db.js";

// Define e exporta o modelo de 'usuario' utilizando a configuração do banco de dados.
const Usuario = db.define("usuario", {
  // Define o campo 'id' como chave primária, inteiro não assinado, auto-incrementado e não nulo.
  id: {
    type: Sequelize.INTEGER,
    validate: {
        min: 0 // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Define o campo 'nome' como string e não nulo.
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Define o campo 'email' como string, não nulo e único.
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  // Define o campo 'senha' como string, não nulo.
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Define o campo 'endereco' como string e não nulo.
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Define o campo 'telefone' como string, não nulo e único.
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  // Define o campo 'tipo' como string e não nulo.
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Define o campo 'foto' para armazenar informações de foto (pode ser string ou URL).
  foto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // Define o campo 'data_criacao' para armazenar a data de criação do registro.
  data_criacao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

export default Usuario;