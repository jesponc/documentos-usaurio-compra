
module.exports = (sequelize, DataTypes) => {

    const Archivo = sequelize.define('archivo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        file: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombre_original: {
            type: DataTypes.STRING,
            allowNull: true
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

    Archivo.association = models => {
        Archivo.belongsTo(models.usuario)
    }
    
    return Archivo
}
    
    
    
    