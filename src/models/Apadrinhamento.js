const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario'); // Importando o modelo Usuario
const Animal = require('./Animal');   // Importando o modelo Animal

const Apadrinhamento = sequelize.define('Apadrinhamento', {
    valor_mensal: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    data_inicio: {
        type: DataTypes.DATE,
        unique: false,
        allowNull: true,
    },
    data_fim: {
        type: DataTypes.DATE,
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
    id_animal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'animais', // Referência à tabela 'animais'
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    },
}, 
{
    tableName: 'apadrinhamentos',  // Nome da tabela no banco de dados
    timestamps: true, // Garante que as colunas 'createdAt' e 'updatedAt' sejam gerenciadas automaticamente
});

// Relacionamento: Apadrinhamento pertence a um Usuario
Apadrinhamento.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'  // Alias para o relacionamento
});

// Relacionamento: Apadrinhamento pertence a um Animal
Apadrinhamento.belongsTo(Animal, {
    foreignKey: 'id_animal',
    as: 'animal'  // Alias para o relacionamento
});

module.exports = Apadrinhamento;
