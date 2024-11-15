const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario'); // Importando o modelo Usuario

const Abrigo = sequelize.define('Abrigo', {
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
    capacidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Referência à tabela 'usuarios'
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    },
}, {
    tableName: 'abrigos',  // Especifica o nome da tabela como 'abrigos'
    timestamps: true,       // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

// Relacionamento: um Abrigo pertence a um Usuario
Abrigo.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario', // Alias para o relacionamento
});

module.exports = Abrigo;
