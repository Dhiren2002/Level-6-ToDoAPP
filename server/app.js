// Main File

const express = require('express');
const logger = require('morgan');
const avatarsRouter = require('../server/routes/avatars');
const tasksRouter = require('./routes/tasks');
const taskStatusRouter = require('./routes/taskStatus');
const cors = require('cors');




const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(cors());








app.use("/avatars", avatarsRouter);
app.use("/tasks", tasksRouter);
app.use("/taskStatus", taskStatusRouter);

app.use("/public", express.static(__dirname + "/public")); 


app.use((req, res) =>
 res.status(404).send("Sorry page not found!"));


module.exports = app;