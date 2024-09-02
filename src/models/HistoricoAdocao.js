import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Animal from "./AnimalModel.js";
import Adocao from "./AdocaoModel.js"; // Certifique-se de que o modelo Adocao está corretamente importado

const HistoricoAdocao = db.define("historico_adocao", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_animal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Animal,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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
  data_adocao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  data_devolucao: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  motivo_devolucao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

export default HistoricoAdocao;
