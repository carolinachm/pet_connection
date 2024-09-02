import { Sequelize } from "sequelize";
import db from "../db/db.js";

const Voluntario = db.define("voluntario", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  disponibilidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  habilidades: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export default Voluntario;
