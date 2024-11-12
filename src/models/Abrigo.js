const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('../models/Usuario'); // Importe o modelo Usuario se ele já estiver criado

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
            model: 'Usuarios', // Nome da tabela relacionada no banco de dados
            key: 'id',
            onUpdate: 'CASCADE', // Definindo a ação para atualização da chave estrangeira
            onDelete: 'CASCADE', // Definindo a ação para exclusão da chave estrangeira
        }
    },
});

// Relacionamento: um Abrigo pertence a um Usuario
Abrigo.belongsTo(Usuario, {
    foreignKey: 'id_usuario', // Chave estrangeira no modelo Abrigo
    as: 'usuario',            // Nome do alias do relacionamento
});

module.exports = Abrigo;
