import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Adocao from "./AdocaoModel.js";

const Avaliacao = db.define("avaliacao", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_adocao: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Adocao,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  nota: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comentarios: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  data_avaliacao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

Avaliacao.belongsTo(Adocao, {
  foreignKey: 'id_adocao',
  as: 'adocao'
});

export default Avaliacao;
