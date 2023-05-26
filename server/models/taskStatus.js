module.exports = (sequelize, Sequelize) => {
    const TaskStatus =
        sequelize.define("task_status",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            field: 'id'
        },
         priority: {
         type: Sequelize.STRING
            }
    },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'task_status'
        }
    );
   
        return TaskStatus;
}