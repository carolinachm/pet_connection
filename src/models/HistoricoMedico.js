import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./UsuarioModel.js";
import Animal from "./AnimalModel.js";

const HistoricoMedico = db.define("historicoMedico", {
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
    onDelete: "SET NULL",
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  data_visita: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  observacoes: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
export default HistoricoMedico;
