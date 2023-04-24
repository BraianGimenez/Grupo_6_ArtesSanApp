
module.exports = (sequelize,DataTypes) => { 

    
    const alias = "UserProducts"
    
    const cols = {
        id : {
            type : DataTypes.INTEGER(11
                ),
            allowNull: false, 
            autoIncrement : true,
            primaryKey : true,
        },
        user_id: {
            type : DataTypes.STRING(20),
            allowNull: false,
        }, 
        product_id : {
            type : DataTypes.INTEGER(11
                ),
            allowNull: false,
        },
    }
    const config = {
       tableName: "users_products",
       timestamps: false,
    }
    const USERPRODUCTS = sequelize.define(alias,cols,config);

/*     USERPRODUCTS.associate = (models) => {
        USERPRODUCTS.hasMany(models.Rol, {
            as: "Rol",
            foreignKey: "rol_id"
        })
    }

    USERPRODUCTS.associate = (models) => {
        USERPRODUCTS.belongsTo(models.User, {
            as: "products",
            foreignKey: "products_id"
        })
    } */
    
    return USERPRODUCTS;
}
