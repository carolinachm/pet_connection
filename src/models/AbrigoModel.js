import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./usuarioModel.js";

const Abrigo = db.define("abrigo", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capacidade_max: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_administrador: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  }
});

export default Abrigo;
