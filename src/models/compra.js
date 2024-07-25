const usuario = require('./usuario.js')

module.exports = (sequelize, DataTypes) => {

    const Compra = sequelize.define('compra', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        tipo: {
            type: DataTypes.ENUM,
            values: ['producto', 'servicio'],
            allowNull: false,
            validate: {
                isIn: {
                    args: [['producto', 'servicio']],
                    msg: ["El tipo debe ser producto o servicio"]
                }
            } 
        },
        status: {
            type: DataTypes.ENUM,
            values: ['activo', 'inactivo'],
            defaultValue: 'activo',
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model: "usuario", key: "id"}
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
        }
    }, {
        paranoid: true,
        freezeTableName: true
    })  

    Compra.associate = models => {
        Compra.belongsTo(models.usuario, {
            foreignKey: 'idUsuario',
            sourceKey: 'id'
        })
    }
        
    return Compra
}
    
    
    
    