const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario'); // Importando o modelo Usuario

const Doacao = sequelize.define('Doacao', {
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        unique: true,
        allowNull: false,
    },
    observacao: {
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
    tableName: 'doacaos',  // Especifica o nome da tabela como 'Doacaos'
    timestamps: true,       // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

// Relacionamento: um Doacao pertence a um Usuario
Doacao.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario', // Alias para o relacionamento
});

module.exports = Doacao;
