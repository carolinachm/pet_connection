import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("animal", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
        min: 0 // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especie: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  raca: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tamanho: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  caracteristicas: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  data_entrada: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  id_abrigo: {
    type: Sequelize.INTEGER,
    allowNull: false, 
    references: {
      model: "Abrigo", // Nome da tabela de referência
      key: "id", // Nome da coluna de referência na tabela de Abrigo
    },
  },
});
