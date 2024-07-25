const compra = require('./compra')

module.exports = (sequelize, DataTypes) => {

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
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

    Usuario.associate = models => {
        Usuario.hasMany(models.compra, {
            foreignKey: 'idUsuario',
            sourceKey: 'id',
            as: 'compra'
        })
    }
    



return Usuario
}



