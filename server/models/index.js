//handles the connection to our database

//Task table structure


const config = require("../config/config");
const Task = require("../models/task");
const TaskStatus = require("./taskStatus");
const Avatar = require("../models/avatars");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 config.DB,
 config.USER,
 config.PASSWORD, {
 host: config.HOST,
 dialect: config.dialect,
 port: config.PORT
});


sequelize
 .authenticate()
 .then(() => {
 console.log('Connection has been established successfully.');
 })
 .catch(err => {
 console.error('Unable to connect to the database:', err);
 })


const db = {};
db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.TaskStatus = TaskStatus(sequelize, Sequelize); 

db.task = Task(sequelize, Sequelize, db.TaskStatus); //db.TaskStatus is to reference the db and create relationship

db.avatar = Avatar(sequelize, Sequelize);



module.exports = db;