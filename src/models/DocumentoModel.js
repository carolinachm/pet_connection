import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Animal from "./AnimalModel.js";
import Adocao from "./AdocaoModel.js";

const Documento = db.define("documento", {
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
  tipo_documento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  caminho_arquivo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_upload: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

export default Documento;
