
module.exports = (sequelize,DataTypes) => { 
    const alias = "Rol"
    const cols = {
        id : {
            type : DataTypes.INTEGER(100
                ),
            allowNull: false, 
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }
    const config = {
       tableName: "rol",
       timestamps: false,
    }
    
    const ROL = sequelize.define(alias,cols,config);

/*     ROL.associate = (models) => {
        ROL.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        })
    }
 */
    
    return ROL;
}