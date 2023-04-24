



module.exports = (sequelize,DataTypes) => { 
    const alias = "Product"
    const cols = {
        id : {
            type : DataTypes.INTEGER(100),
            allowNull: false, 
            autoIncrement : true,
            primaryKey : true,
        },
        name: {
            type : DataTypes.STRING(100),
            allowNull: false,
        }, 
        price : {
            type : DataTypes.INTEGER(100),
            allowNull: false,
        },
        description : {
            type : DataTypes.STRING(100),
            allowNull: false,
        },
        discount : {
            type : DataTypes.INTEGER(100)
        },
        image : {
            type : DataTypes.STRING(50),
            allowNull:false,
        },
        categories_id : {
            type : DataTypes.INTEGER(20)
        },
    }
    const config = {
       tableName: "products",
       timestamps: false,
    }
    
    const PRODUCT = sequelize.define(alias,cols,config);

   /*  PRODUCT.associate = (models) => {
        PRODUCT.belongsTo(models.Subcategory, {
            as: "Categories",
            foreignKey: "categories_id",
        });
    
    } */
    return PRODUCT;
}