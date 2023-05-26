//returns the relevant data in JSON format

const router = require('../routes/tasks');
const utilities = require('../utilities/utility');
const fs = require('fs');
const path = require('path');
const db = require('../models');
const { task } = require('../models');
const Task = db.task;
const TaskStatus = db.TaskStatus;

create = async (req, res) =>{
    const task = {
         task_name: req.body.task_name,   
         description: req.body.description,
         task_status_id: req.body.task_status_id,
         task_date: req.body.task_date,
         task_time: req.body.task_time,
      };
         try{
            if (task.task_name == null ||
               task.description == null ||
               task.task_status_id == null ||
               task.task_date ==null ||
               task.task_time == null){
            throw new Error("Essential fields missing");
         }
            await Task.create(task);
            res.status(201).json(task);
         }
         catch (error){
            utilities.formatErrorResponse(res,400,error.message);
         }
   }

   deleting = async (req, res) =>{
        const id =req.params.id;
      try{
         const deleted = await Task.destroy({where: { id: id }});
         if (deleted==0) {
         throw new Error("Id not found");
       }
         res.status(200).send("Task deleted");
      }
      catch(error){
      utilities.formatErrorResponse(res,404,error.message);
      }
   }


getAll = async (req, res) =>{
   try{
      const task = await Task.findAll({
      order:['id'],
         include:[{
      model:TaskStatus,
         required: true
         }]
     });
        res.status(200).json(task);
        }
          catch(error){
              utilities.formatErrorResponse(res,400,error.message);
             }
         }


getDateandTime = async (req, res) =>{
   try{
      const task = await Task.findAll(
         {order: [['task_date', 'ASC'],
                  ['task_time', 'ASC']],
         limit: 1,
         include: [{
         model: TaskStatus,
         required: true}]
 
         });

      if(task.length==0){
         throw new Error("Unable to find Task with priority " + pri);
      }
      res.status(200).json(task);
      }
      catch(error){
         utilities.formatErrorResponse(res,400,error.message);
      }
}


getByPri = async (req, res) =>{
      const pri =req.params.value;
      try{
         const task = await Task.findAll(
         {where: {task_status_id: pri},
         include: [{
         model: TaskStatus,
         required: true}]
 
         });
      if(task.length==0){
         throw new Error("Unable to find Task with priority " + pri);
      }
      res.status(200).json(task);
   }
   catch(error){
         utilities.formatErrorResponse(res,400,error.message);
   }
}

getByDesc = async (req, res) =>{
      const desc =req.params.value;
      try{
         const task = await Task.findAll(
         {where: {description: desc},
         include: [{
         model: TaskStatus,
         required: true}]
    
      });
      if(task.length==0){
         throw new Error("Unable to find Task with description " + desc);
      }
      res.status(200).json(task);
   }
   catch(error){
      utilities.formatErrorResponse(res,400,error.message);
   }
}


getById = async (req, res) =>{
      const id =req.params.id;
      console.log(id)
    try{
      const task = await Task.findByPk(id,
     {include: [{model:TaskStatus, required: true}]});
    
   if(task==null || task.length==0){
      throw new Error("Unable to find Task with id " + id);
   }
      res.status(200).json(task);
   }
   catch(error){
      utilities.formatErrorResponse(res,400,error.message);
   }
}


update = async (req, res) =>{
      const id =req.body.id;
      console.log(req.body)
       const task = {
            task_name: req.body.task_name,
            description: req.body.description,
            task_status_id: req.body.task_status_id,
            task_date: req.body.task_date,
            task_time: req.body.task_time,

         };
   
      try{
         if (id==null ||
            task.task_name==null ||
            task.description==null ||
            task.task_status_id==null ||
            task.task_date == null ||
            task.task_time == null)
         {
          throw new Error("Missing essential fields");
         }
      await Task.update(task,
            {where: { id: id }}
         );
       res.status(200).json(task);
       }
      catch (error){
        utilities.formatErrorResponse(res,400,error.message);
      }
}




   module.exports = {create, deleting, getAll, getDateandTime, getByPri , getByDesc, getById, update};
