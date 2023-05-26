//Task table structure



module.exports = (sequelize, Sequelize, taskStatus) => {
    const Task = sequelize.define("task",
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    task_name: {
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    task_date: {
    type: Sequelize.DATE
    },
    task_time : {
    type: Sequelize.TIME
    },
    },

    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'task'
    }
    );

Task.belongsTo(taskStatus,
                {foreignKey: 'task_status_id'}); //Adds foreign key

    return Task;
};