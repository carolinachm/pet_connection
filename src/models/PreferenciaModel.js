import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./usuarioModel.js";

const PreferenciaAdocao = db.define("preferencia_adocao", {
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
  especie_preferida: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tamanho_preferido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faixa_etaria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default PreferenciaAdocao;
