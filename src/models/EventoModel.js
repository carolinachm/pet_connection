import { Sequelize } from "sequelize";
import db from "../db/db.js";

const Evento = db.define("evento", {
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
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  local: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  organizador: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Evento;
