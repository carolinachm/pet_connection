const{DataTypes} =  require("sequelize");
const sequelize = require("../config/database");
const Adocao = require("./Adocao");

const Avaliacao = sequelize.define('Avaliacao', {
    nota: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    comentario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_adocao: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'adocao',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    },
},{
        tableName: 'avaliacao',
        timestamps: true
  
});
Avaliacao.belongsTo(Adocao, {
    foreignKey:'id_adocao',
    as: 'adocao',
});

module.exports = Avaliacao;