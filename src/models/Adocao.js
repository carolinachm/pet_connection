const{DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Animal = require('./Animal');


const Adocao = sequelize.define('Adocao',{
    data_adocao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status_adocao: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'usuarios',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    },
    id_animal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'animais',
            key:'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    },
},{
    tableName: 'adocao',
    timestamps:true
});

Adocao.belongsTo(Usuario,{
    foreignKey: 'id_usuario',
    as: 'usuario',
});
Adocao.belongsTo(Animal, {
    foreignKey: 'id_animal',
    as: 'animal',
});

module.exports = Adocao;