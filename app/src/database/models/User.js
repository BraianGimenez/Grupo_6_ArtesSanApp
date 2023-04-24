

module.exports = (sequelize,DataTypes) => { 

    
    const alias = "User"
    
    const cols = {
        id : {
            type : DataTypes.INTEGER(100
                ),
            allowNull: false, 
            autoIncrement : true,
            primaryKey : true,
        },
        name: {
            type : DataTypes.STRING(100),
            allowNull: false,
        }, 
        email : {
            type : DataTypes.STRING(100),
            allowNull: false,
        },
        pass : {
            type : DataTypes.INTEGER(100),
            allowNull: false,
        },
        avatar : {
            type : DataTypes.INTEGER(100
                )
        },
/*         rol_id : {
            type : DataTypes.INTEGER(100
                )
        }, */
    }
    const config = {
       tableName: "users",
       timestamps: false,
    }
    const USER = sequelize.define(alias,cols,config);

  /*   USER.associate = (models) => {
        USER.belongsTo(models.Rol, {
            as: "Rol",
            foreignKey: "rol_id"
        })
    } */
    return USER;
}
