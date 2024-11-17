// src/models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evento = sequelize.define('Evento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
   
}, {
    tableName: 'eventos',  // Especifica o nome da tabela como 'eventos' (em minúsculas)
    timestamps: false,       // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

module.exports = Evento;
