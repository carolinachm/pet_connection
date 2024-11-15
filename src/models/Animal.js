const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Abrigo = require('./Abrigo'); // Importando o modelo Abrigo

const Animal = sequelize.define('Animal', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_abrigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'abrigos',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }
}, {
  tableName: 'animais', // Especifica o nome da tabela como 'animais'
  timestamps: true // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

// Relacionamento: Animal pertence a um Abrigo
Animal.belongsTo(Abrigo, {
  foreignKey: 'id_abrigo',
  as: 'abrigo'
});

module.exports = Animal;
