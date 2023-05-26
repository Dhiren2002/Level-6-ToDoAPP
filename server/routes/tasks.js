const controller = require('../controllers/tasks');
var express = require('express');
var router = express.Router();

 


router.get('/', controller.getAll);
router.get('/pri/:value', controller.getByPri);
router.get('/desc/:value', controller.getByDesc);
router.get('/:id', controller.getById);
router.get('/tasks/TaskOrder', controller.getDateandTime);


router.post("/", controller.create); 
router.delete('/:id', controller.deleting);
router.put("/", controller.update);
module.exports = router;