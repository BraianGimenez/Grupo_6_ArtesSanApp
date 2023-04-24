
module.exports = (sequelize,DataTypes) => { 
    const alias = "categories"
    const cols = {
        id : {
            type : DataTypes.INTEGER(11
                ),
            allowNull: false, 
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
       /*  jewelryBijouteri: {
            type : DataTypes.STRING(30),
            allowNull: false,
        }, 
        dress : {
            type : DataTypes.STRING(30),
            allowNull: false,
        },
        handicrafts : {
            type : DataTypes.STRING(30),
            allowNull: false,
        },
        art : {
            type : DataTypes.STRING(20)
        },
        food : {
            type : DataTypes.STRING(30)
        },
        several : {
            type : DataTypes.STRING(20)
        },
    } */
}
    const config = {
       tableName: "categories",
       timestamps: false,
    }
    
    const CATEGORY = sequelize.define(alias,cols,config);

    
    return CATEGORY;
}