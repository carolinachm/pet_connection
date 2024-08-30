import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./UsuarioModel.js";
import Animal from "./AnimalModel.js";

const Apadrinhamento = db.define("apadrinhamento", {
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
  valor_mensal: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  data_inicio: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  data_fim: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

export default Apadrinhamento;
