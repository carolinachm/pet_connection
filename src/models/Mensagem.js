const {DataType, DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('../models/Usuario');

const Mensagem = sequelize.define('Mensagem', {

    assuntos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_usuario_origem:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    },
    id_usuario_destino: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    } },{
        tableName: 'mensagens',
        timestamps: false,

})
Mensagem.belongsTo(Usuario, {
    foreignKey: 'id_usuario_origem',
    as: 'usuarioOrigem',
});
Mensagem.belongsTo(Usuario, {
    foreignKey: 'id_usuario_destino',
    as: 'usuarioDestino',
})

module.exports = Mensagem;