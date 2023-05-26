//Avatar table structure



module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatar",
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    name:{
    type: Sequelize.STRING
    },
    image: {
    type: Sequelize.BLOB
    },
    },

    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'avatar'
    }
    );

    return Avatar;
 
};