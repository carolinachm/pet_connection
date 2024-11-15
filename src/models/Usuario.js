// src/models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'usuarios',  // Especifica o nome da tabela como 'usuarios' (em minúsculas)
    timestamps: true,       // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

module.exports = Usuario;
