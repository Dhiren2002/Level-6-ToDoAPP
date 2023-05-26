const router = require('../routes/taskStatus');

const utilities = require('../utilities/utility');
const db = require('../models');

const TaskStatus = db.TaskStatus;


getAll = async (req, res) =>{
    const taskStatus = await TaskStatus.findAll();

    res.status(200).json(taskStatus);
   }

getById = async (req, res) =>{

    const id =req.params.id;
        try{
            const taskStatus = await TaskStatus.findByPk(id);
            if(taskStatus==null || taskStatus.length==0){
                throw new Error("Unable to find Task with id " + id);
            }
        res.status(200).json(taskStatus);
        }
        catch(error){
            utilities.formatErrorResponse(res,400,error.message);
        }
   }

   module.exports = {getAll, getById};