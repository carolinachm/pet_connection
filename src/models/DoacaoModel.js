import { Sequelize } from "sequelize";
import db from "../db/db.js";
import Usuario from "./usuarioModel.js";

const Doacao = db.define("doacao", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  observacoes: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

Doacao.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

export default Doacao;
