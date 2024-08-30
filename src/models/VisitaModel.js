import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./UsuarioModel.js";
import Animal from "./AnimalModel.js";

const Visita = db.define("visita", {
  id: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0, // Garante que o valor seja sempre maior ou igual a 0
    },
    id_animal: {
      type: Sequelize.INTEGER,
      allownull: false,
      references: {
        medel: Animal,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allownull: false,
      references: {
        medel: Usuario,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    data_visita: {
      type: Sequelize.DATE,
      allownull: false,
    },
    observacoes: {
      type: Sequelize.TEXT,
      allownull: false,
    },
  },
});

export default Visita;
