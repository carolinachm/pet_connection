import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Animal from "./AnimalModel.js";
import Usuario from "./UsuarioModel.js";

const Adocao = db.define("adocao", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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
  data_adocao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  status_adocao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  observacoes: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

export default Adocao;