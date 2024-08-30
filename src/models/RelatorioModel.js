import { Sequelize } from "sequelize";
import db from "../db/db.js";

const Relatorio = db.define("relatorio", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipo_relatorio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_criacao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  parametros: {
    type: Sequelize.JSON,
    allowNull: true,
  },
});

export default Relatorio;
